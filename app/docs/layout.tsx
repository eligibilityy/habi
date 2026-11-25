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
      sidebar={{ components: sidebarComponents, collapsible: false }}
      tree={source.getPageTree()}
    >
      {children}
    </DocsLayout>
  );
}
