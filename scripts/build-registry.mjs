// Builds everything that lists Habi's components, from the files themselves:
//   - registry/habi/examples/index.ts: every demo, for <ComponentPreview>.
//   - registry.json: every component, its packages and the Habi parts it
//     uses, for `shadcn build`.
//   - The `npm install` and `npx shadcn@latest add` lines in each docs section
//     that shows a component's source, so they always match the file.
// `pnpm registry` runs this, then `shadcn build` writes public/r/*.json.
// `dev` and `build` run `pnpm registry`; `precommit` and CI run this script.

import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { format } from "prettier";

const EXAMPLES_DIR = "registry/habi/examples";
const UI_DIR = "registry/habi/ui";
const UTILS = "registry/habi/lib/utils.ts";
const DOCS_DIR = "content/docs";
const COMPONENT_DOCS_DIR = "content/docs/components";

// Parts with no docs page of their own.
const descriptions = {
  utils:
    "The cn helper, which merges Tailwind classes with Habi's text styles and radius roles.",
};

const siteUrl = (await readFile("lib/shared.ts", "utf8")).match(
  /siteUrl = "([^"]+)"/,
)[1];
// REGISTRY_URL points dependencies at a local server, to test an install.
const itemUrl = (name) =>
  `${process.env.REGISTRY_URL ?? siteUrl}/r/${name}.json`;

async function writeFormatted(file, source, parser) {
  await writeFile(file, await format(source, { parser, filepath: file }));
}

// --- Imports -----------------------------------------------------------------

const internalNames = new Map(); // "registry/habi/ui/input.tsx" → "text-input"

function packageName(specifier) {
  const parts = specifier.split("/");
  return specifier.startsWith("@") ? parts.slice(0, 2).join("/") : parts[0];
}

/** Sorts a file's imports into npm packages and other Habi files. */
async function readImports(file) {
  const source = await readFile(file, "utf8");
  const specifiers = [
    ...source.matchAll(/(?:import|export)\s[^;]*?from\s+["']([^"']+)["']/g),
    ...source.matchAll(/import\s+["']([^"']+)["']/g),
  ].map((match) => match[1]);

  const packages = new Set();
  const files = new Set();
  for (const specifier of specifiers) {
    if (specifier.startsWith("@/registry/habi/")) {
      const target = specifier.replace("@/", "");
      files.add(target.endsWith("/utils") ? UTILS : `${target}.tsx`);
    } else if (!specifier.startsWith(".") && !specifier.startsWith("@/")) {
      const name = packageName(specifier);
      if (name !== "react" && name !== "react-dom" && name !== "next") {
        packages.add(name);
      }
    }
  }
  return { packages: [...packages].sort(), files: [...files].sort() };
}

// --- Docs pages --------------------------------------------------------------

function frontmatter(source) {
  const block = source.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  return Object.fromEntries(
    block
      .split("\n")
      .map((line) => line.match(/^(\w+):\s*(.*)$/))
      .filter(Boolean)
      .map(([, key, value]) => [key, value.trim()]),
  );
}

const sourcesIn = (text) =>
  [...text.matchAll(/<ComponentSource\s+src="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((src) => src.startsWith(`${UI_DIR}/`) || src === UTILS);

async function listMdx(dir) {
  const entries = await readdir(dir, { recursive: true });
  return entries
    .filter((entry) => entry.endsWith(".mdx"))
    .map((entry) => path.join(dir, entry).replaceAll("\\", "/"));
}

const pages = await Promise.all(
  (await listMdx(DOCS_DIR)).map(async (file) => {
    const source = await readFile(file, "utf8");
    return { file, source, meta: frontmatter(source) };
  }),
);

// A component's registry name is its docs page's name: input.tsx is "text-input".
const pageMeta = new Map();
// Parts that wrap other components, like Field around Text input. When a
// page's code imports one, the CLI adds it with that page's component, even
// though the component file doesn't import it.
const WRAPPERS = new Set(["field"]);
const usedOnPage = new Map();
for (const page of pages) {
  if (!page.file.startsWith(COMPONENT_DOCS_DIR)) continue;
  const slug = path.basename(page.file, ".mdx");
  const used = [...page.source.matchAll(/from "@\/components\/ui\/([\w-]+)"/g)]
    .map((match) => match[1])
    .filter((part) => WRAPPERS.has(part))
    .map((part) => `${UI_DIR}/${part}.tsx`);
  for (const src of sourcesIn(page.source)) {
    internalNames.set(src, slug);
    pageMeta.set(src, page.meta);
    usedOnPage.set(src, used);
  }
}

// --- registry.json -----------------------------------------------------------

const uiFiles = (await readdir(UI_DIR))
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => `${UI_DIR}/${file}`);

for (const file of [UTILS, ...uiFiles]) {
  if (!internalNames.has(file)) {
    internalNames.set(file, path.basename(file).replace(/\.tsx?$/, ""));
  }
}

const importsByFile = new Map();
for (const file of [UTILS, ...uiFiles]) {
  importsByFile.set(file, await readImports(file));
}

const items = [UTILS, ...uiFiles]
  .map((file) => {
    const name = internalNames.get(file);
    const meta = pageMeta.get(file);
    const { packages } = importsByFile.get(file);
    const files = [
      ...new Set([
        ...importsByFile.get(file).files,
        ...(usedOnPage.get(file) ?? []),
      ]),
    ].filter((dep) => dep !== file && importsByFile.has(dep));
    const isLib = file === UTILS;
    const description = meta?.description ?? descriptions[name];
    if (!description) {
      throw new Error(
        `${file} has no docs page. Give it a description in scripts/build-registry.mjs.`,
      );
    }
    return {
      name,
      type: isLib ? "registry:lib" : "registry:ui",
      title: meta?.title,
      description,
      dependencies: packages.length ? packages : undefined,
      registryDependencies: files.map((dep) => itemUrl(internalNames.get(dep))),
      files: [{ path: file, type: isLib ? "registry:lib" : "registry:ui" }],
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

await writeFormatted(
  "registry.json",
  JSON.stringify({
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: "habi",
    homepage: siteUrl,
    items,
  }),
  "json",
);

// --- Examples index ----------------------------------------------------------

const toIdentifier = (name) =>
  name.replace(/(^|-)(\w)/g, (_, __, letter) => letter.toUpperCase());

const examples = (await readdir(EXAMPLES_DIR))
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => path.basename(file, ".tsx"))
  .sort();

await writeFormatted(
  `${EXAMPLES_DIR}/index.ts`,
  [
    "// Generated by scripts/build-registry.mjs from the files in this folder. DO NOT EDIT BY HAND!",
    "",
    'import type { ComponentType } from "react";',
    "",
    ...examples.map((name) => `import ${toIdentifier(name)} from "./${name}";`),
    "",
    "export const examples: Record<string, ComponentType> = {",
    ...examples.map((name) => `  "${name}": ${toIdentifier(name)},`),
    "};",
    "",
  ].join("\n"),
  "typescript",
);

// --- Install lines in the docs ----------------------------------------------

const problems = [];
let updatedPages = 0;

for (const page of pages) {
  const sections = page.source.split(/(?=^## )/m);
  const updated = sections.map((section) => {
    const sources = sourcesIn(section);
    if (sources.length === 0) return section;

    const packages = [
      ...new Set(
        sources.flatMap((src) => importsByFile.get(src)?.packages ?? []),
      ),
    ].sort();
    const fence = /```npm\nnpm install [^\n]*\n```/;
    const heading = section.split("\n")[0];

    // Component pages also offer the shadcn CLI. Keep its URL right.
    if (page.file.startsWith(COMPONENT_DOCS_DIR)) {
      const command = `npx shadcn@latest add ${sources
        .map((src) => `${siteUrl}/r/${internalNames.get(src)}.json`)
        .join(" ")}`;
      const cli = /npx shadcn@latest add [^\n]*/;
      if (cli.test(section)) {
        section = section.replace(cli, command);
      } else {
        problems.push(
          `${page.file} "${heading}" needs a \`${command}\` block.`,
        );
      }
    }

    if (!fence.test(section)) {
      if (packages.length && page.file.startsWith(COMPONENT_DOCS_DIR)) {
        problems.push(
          `${page.file} "${heading}" needs an \`npm install ${packages.join(" ")}\` block.`,
        );
      }
      return section;
    }
    if (packages.length === 0) {
      problems.push(
        `${page.file} "${heading}" has an npm install block, but its files import no packages. Remove it.`,
      );
      return section;
    }
    return section.replace(
      fence,
      `\`\`\`npm\nnpm install ${packages.join(" ")}\n\`\`\``,
    );
  });

  const source = updated.join("");
  if (source !== page.source) {
    await writeFile(page.file, source);
    updatedPages += 1;
  }
}

console.log(
  `Wrote registry.json (${items.length} items) and ${EXAMPLES_DIR}/index.ts (${examples.length} examples). Updated install lines on ${updatedPages} page(s).`,
);

if (problems.length) {
  console.error(problems.map((problem) => `- ${problem}`).join("\n"));
  process.exit(1);
}
