import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { DocsLinksMenu } from "@/components/site/docs-links-menu";
import { HabiMark } from "@/components/site/habi-mark";
import { appName, figmaUrl, githubUrl } from "./shared";

/**
 * The docs: the mark alone at the top of the sidebar, with a Resources menu
 * for GitHub and Figma. The sidebar already lists every section.
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <HabiMark mono className="h-5 w-[27px] text-text-primary" />
          <span className="sr-only">{appName}</span>
        </>
      ),
      children: <DocsLinksMenu />,
    },
    themeSwitch: { enabled: false },
  };
}

export function homeOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <HabiMark mono className="h-5 w-[27px] text-text-primary" />
          {appName}
        </>
      ),
    },
    links: [
      { text: "Get started", url: "/docs" },
      // The sections have no index page, so these link to their first page.
      { text: "Foundations", url: "/docs/foundations/color" },
      { text: "Components", url: "/docs/components/button" },
      { text: "Figma", url: figmaUrl, external: true },
    ],
    githubUrl,
    themeSwitch: { enabled: false },
  };
}
