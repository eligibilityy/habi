import fs from "node:fs/promises";
import path from "node:path";
import { Tabs } from "@base-ui/react/tabs";
import { highlight } from "fumadocs-core/highlight";
import { Pre } from "fumadocs-ui/components/codeblock";

import { CodeBlock } from "@/components/docs/code-block";
import { examples } from "@/registry/habi/examples";

const tabClass =
  "text-label text-text-secondary hover:text-text-primary data-active:text-text-primary data-active:border-interactive-default focus-visible:outline-focus-default -mb-px flex h-12 items-center border-b-2 border-transparent px-3 focus-visible:outline-2 focus-visible:-outline-offset-2";

async function readSource(file: string) {
  const source = await fs.readFile(path.join(process.cwd(), file), "utf8");
  return source
    .replaceAll("@/registry/habi/ui/", "@/components/ui/")
    .replaceAll("@/registry/habi/lib/", "@/lib/")
    .trim();
}

function highlightTsx(source: string) {
  return highlight(source, {
    lang: "tsx",
    components: { pre: (props) => <Pre {...props} /> },
  });
}

export async function ComponentPreview({ name }: { name: string }) {
  const Example = examples[name];
  if (!Example) {
    throw new Error(
      `No example "${name}". Add it to registry/habi/examples/index.ts`,
    );
  }

  const code = await highlightTsx(
    await readSource(`registry/habi/examples/${name}.tsx`),
  );

  return (
    <Tabs.Root
      defaultValue="preview"
      className="my-6 overflow-hidden rounded-sm border border-border-subtle-01 bg-layer-01"
    >
      <Tabs.List className="flex border-b border-border-subtle-01 bg-layer-accent-01 px-2">
        <Tabs.Tab value="preview" className={tabClass}>
          Preview
        </Tabs.Tab>
        <Tabs.Tab value="code" className={tabClass}>
          Code
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel
        value="preview"
        className="not-prose flex min-h-48 flex-wrap items-center justify-center gap-4 p-6 sm:p-10"
      >
        <Example />
      </Tabs.Panel>
      <Tabs.Panel value="code">
        <CodeBlock className="my-0 rounded-none border-0">{code}</CodeBlock>
      </Tabs.Panel>
    </Tabs.Root>
  );
}

export async function ComponentSource({
  src,
  title,
}: {
  src: string;
  title?: string;
}) {
  const code = await highlightTsx(await readSource(src));
  return <CodeBlock title={title}>{code}</CodeBlock>;
}
