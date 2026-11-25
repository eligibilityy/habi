import { DocsLayout } from "fumadocs-ui/layouts/notebook";

import { DocsHeader } from "@/components/site/docs-header";
import { sidebarComponents } from "@/components/site/docs-sidebar";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  const { nav, ...base } = baseOptions();

  return (
    <DocsLayout
      {...base}
      nav={{ ...nav, mode: "top" }}
      slots={{ header: DocsHeader }}
      sidebar={{
        components: sidebarComponents,
        collapsible: false,
        // Like shadcn's: a panel that stops short of the bottom of the
        // screen instead of a full-height column. md: only, because the
        // phone menu drawer gets the same classes.
        className: "md:inset-y-auto md:top-6 md:h-[calc(100%-5rem)]",
      }}
      tree={source.getPageTree()}
    >
      {children}
    </DocsLayout>
  );
}
