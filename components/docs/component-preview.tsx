import type { ComponentProps } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import { highlight } from "fumadocs-core/highlight";
import { transformerIcon } from "fumadocs-core/mdx-plugins/transformer-icon";
import { Pre } from "fumadocs-ui/components/codeblock";

import { CodeBlock } from "@/components/docs/code-block";
import { CollapsibleCode } from "@/components/docs/collapsible-code";
import { examples } from "@/registry/habi/examples";

async function readSource(file: string) {
  const source = await fs.readFile(path.join(process.cwd(), file), "utf8");
  return source
    .replaceAll("@/registry/habi/ui/", "@/components/ui/")
    .replaceAll("@/registry/habi/lib/", "@/lib/")
    .trim();
}

function highlightCode(source: string, lang = "tsx") {
  return highlight(source, {
    lang,
    components: { pre: (props) => <Pre {...props} /> },
  });
}

export async function ComponentPreview({ name }: { name: string }) {
  const Example = examples[name];
  if (!Example) {
    throw new Error(
      `No example "${name}". Add registry/habi/examples/${name}.tsx and run pnpm registry.`,
    );
  }

  const code = await highlightCode(
    await readSource(`registry/habi/examples/${name}.tsx`),
  );

  // The preview on top, its code underneath, as on Base UI's docs.
  return (
    <div className="my-6 overflow-hidden rounded-card border border-border-subtle-01 bg-layer-01">
      <div className="not-prose flex min-h-48 flex-wrap items-center justify-center gap-4 p-6 sm:p-10">
        <Example />
      </div>
      <CollapsibleCode>
        <CodeBlock className="my-0 rounded-none bg-transparent">
          {code}
        </CodeBlock>
      </CollapsibleCode>
    </div>
  );
}

export async function ComponentSource({
  src,
  title,
}: {
  src: string;
  title?: string;
}) {
  // Highlight by file type, so CSS files shown on the Installation page read
  // as CSS. The icon transformer adds the same file icon MDX code blocks get.
  const lang = path.extname(src).slice(1) || "tsx";
  return highlight(await readSource(src), {
    lang,
    transformers: [transformerIcon()],
    components: {
      pre: ({ icon, ...props }: ComponentProps<"pre"> & { icon?: string }) => (
        <CodeBlock title={title} icon={icon}>
          <Pre {...props} />
        </CodeBlock>
      ),
    },
  });
}
