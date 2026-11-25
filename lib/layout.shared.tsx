import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

import { FigmaIcon, GitHubIcon } from "@/components/site/brand-icons";
import { HabiMark } from "@/components/site/habi-mark";
import { NavLinks } from "@/components/site/nav-links";
import { appName, figmaUrl, githubUrl } from "./shared";

/**
 * The top bar, shared by the home page and the docs: the mark and name, the
 * sections, then GitHub and Figma as icons.
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <HabiMark mono className="h-5 w-[27px] text-text-primary" />
          {appName}
        </>
      ),
      children: <NavLinks />,
    },
    links: [
      {
        type: "icon",
        text: "GitHub",
        label: "GitHub",
        icon: <GitHubIcon />,
        url: githubUrl,
        external: true,
      },
      {
        type: "icon",
        text: "Figma",
        label: "Figma",
        icon: <FigmaIcon />,
        url: figmaUrl,
        external: true,
      },
    ],
    themeSwitch: { enabled: false },
  };
}
