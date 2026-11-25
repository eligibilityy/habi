import { source } from "@/lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from "fumadocs-ui/layouts/notebook/page";
import { notFound } from "next/navigation";
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
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">
        {page.data.description}
      </DocsDescription>
      <div className="-ms-2 flex flex-row items-center gap-1">
        <MarkdownCopyButton markdownUrl={markdownUrl} className={pageAction} />
        <ViewOptionsPopover
          className={pageAction}
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${encodeURI(page.path)}`}
        />
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
