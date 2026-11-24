"use client";

import { Menu } from "@base-ui/react/menu";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";

import { FigmaIcon, GitHubIcon } from "@/components/site/brand-icons";
import { figmaUrl, githubUrl } from "@/lib/shared";

const links = [
  {
    href: githubUrl,
    icon: GitHubIcon,
    title: "GitHub",
    description: "The code for the components and this site",
  },
  {
    href: figmaUrl,
    icon: FigmaIcon,
    title: "Figma",
    description: "The design file, with every component",
  },
];

export function DocsLinksMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger className="me-1 inline-flex h-8 items-center gap-1 rounded-control px-2 text-body-sm text-text-secondary outline-none hover:bg-background-hover hover:text-text-primary focus-visible:focus-ring data-popup-open:bg-background-hover data-popup-open:text-text-primary">
        Resources
        <ChevronDownIcon className="size-4 in-data-popup-open:rotate-180 motion-safe:transition-transform motion-safe:duration-(--duration-fast)" />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner
          sideOffset={4}
          align="end"
          className="z-50 outline-none"
        >
          <Menu.Popup className="w-72 rounded-overlay border border-border-subtle-01 bg-layer-01 p-1 shadow-overlay outline-none data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:transition-opacity motion-safe:duration-(--duration-fast) motion-safe:ease-out">
            {links.map(({ href, icon: Icon, title, description }) => (
              <Menu.LinkItem
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 rounded-sm px-3 py-2.5 text-text-primary outline-none select-none data-highlighted:bg-background-hover"
              >
                <Icon className="mt-0.5 size-5 shrink-0 text-icon-primary" />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1 text-label">
                    {title}
                    <ArrowTopRightOnSquareIcon className="size-3.5 text-icon-secondary" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                  <span className="block text-body-sm text-text-secondary">
                    {description}
                  </span>
                </span>
              </Menu.LinkItem>
            ))}
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
