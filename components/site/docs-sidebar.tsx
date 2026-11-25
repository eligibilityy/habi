"use client";

import { usePathname } from "next/navigation";
import {
  SidebarItem,
  SidebarSeparator,
} from "fumadocs-ui/components/sidebar/base";
import type { SidebarPageTreeComponents } from "fumadocs-ui/components/sidebar/page-tree";

import { cn } from "@/registry/habi/lib/utils";

function isCurrent(url: string, pathname: string) {
  const strip = (path: string) => path.replace(/\/$/, "");
  return strip(url) === strip(pathname);
}

/**
 * A page link. Like shadcn's sidebar, the pill fits the name rather than the
 * full width. The current page is blue and bold, on a grey pill.
 */
function Item({ item }: Parameters<SidebarPageTreeComponents["Item"]>[0]) {
  const pathname = usePathname();
  const current = isCurrent(item.url, pathname);

  return (
    <SidebarItem
      href={item.url}
      external={item.external}
      active={current}
      className={cn(
        "flex h-8 w-fit items-center rounded-control px-2 text-body-sm text-text-primary outline-none hover:bg-background-hover focus-visible:focus-ring",
        current && "bg-layer-accent-01 text-label text-interactive-default",
      )}
    >
      {item.name}
    </SidebarItem>
  );
}

/** A section label, like "Components", quieter than the pages under it. */
function Separator({
  item,
}: Parameters<SidebarPageTreeComponents["Separator"]>[0]) {
  return (
    <SidebarSeparator className="mt-6 mb-1 px-2 text-body-sm text-text-secondary first:mt-0">
      {item.icon}
      {item.name}
    </SidebarSeparator>
  );
}

export const sidebarComponents: Partial<SidebarPageTreeComponents> = {
  Item,
  Separator,
};
