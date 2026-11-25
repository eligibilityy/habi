import { source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from "fumadocs-ui/layouts/notebook/page";
import {
  TOCPopover,
  TOCProvider,
} from "fumadocs-ui/layouts/notebook/page/slots/toc";
import { notFound } from "next/navigation";
import { DocsToc } from "@/components/site/docs-toc";
import { getMDXComponents } from "@/components/mdx";
import { Callout } from "@/components/docs/callout";
import type { Metadata } from "next";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { getPageImageUrl, gitConfig } from "@/lib/shared";

// Quiet text actions under the description, instead of bordered buttons.
const pageAction =
  "border-0 bg-transparent px-2 text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-foreground";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = `${page.url}.md`;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      slots={{
        toc: { provider: TOCProvider, main: DocsToc, popover: TOCPopover },
      }}
      // A column of about 75 characters, centred between the sidebar and the
      // table of contents.
      className="*:mx-auto *:w-full *:max-w-180"
    >
      <DocsTitle className="text-[2rem] leading-10 font-bold tracking-[-0.02em]">
        {page.data.title}
      </DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      {/* The wrapper keeps the column's margins; the row inside lines the
          action text up with the title. */}
      <div>
        <div className="-ms-2 flex flex-row items-center gap-1">
          <MarkdownCopyButton
            markdownUrl={markdownUrl}
            className={pageAction}
          />
          <ViewOptionsPopover
            className={pageAction}
            markdownUrl={markdownUrl}
            githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${encodeURI(page.path)}`}
          />
        </div>
      </div>
      <DocsBody>
        {page.data.status === "planned" && (
          <Callout type="info" title="Planned">
            This component is designed in Figma but not built yet, so
            there&apos;s no code to install. This page describes what it will
            do.
          </Callout>
        )}
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImageUrl(page).url,
    },
  };
}
