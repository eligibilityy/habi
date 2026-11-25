"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { useNotebookLayout } from "fumadocs-ui/layouts/notebook";

import { cn } from "@/registry/habi/lib/utils";

const iconButton =
  "inline-flex size-9 items-center justify-center rounded-control text-icon-primary outline-none hover:bg-background-hover focus-visible:focus-ring [&_svg]:size-5";

/**
 * The docs top bar: the mark and sections on the left, then search, GitHub
 * and Figma on the right, like the home page. On phones, search and the menu
 * button replace the links.
 */
export function DocsHeader({ className, ...props }: ComponentProps<"header">) {
  const {
    slots,
    navItems,
    props: { nav },
  } = useNotebookLayout();

  return (
    <header
      id="nd-subnav"
      {...props}
      className={cn(
        "sticky top-(--fd-docs-row-1) z-10 bg-fd-background [grid-area:header] layout:[--fd-header-height:--spacing(14)]",
        className,
      )}
    >
      <div className="flex h-14 items-center gap-2 border-b border-border-subtle-01 px-4 md:px-6">
        <Link
          href={nav?.url ?? "/"}
          className="inline-flex items-center gap-2.5 rounded-sm text-label text-text-primary outline-none focus-visible:focus-ring"
        >
          {typeof nav?.title === "function" ? null : nav?.title}
        </Link>
        {nav?.children}

        <div className="ms-auto flex items-center gap-1">
          {slots.searchTrigger && (
            <>
              <slots.searchTrigger.full
                hideIfDisabled
                className="me-2 w-60 max-md:hidden"
              />
              <slots.searchTrigger.sm
                hideIfDisabled
                className={cn(iconButton, "p-0 md:hidden")}
              />
            </>
          )}
          {navItems
            .filter((item) => item.type === "icon")
            .map((item) => (
              <a
                key={item.url}
                href={item.url}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                aria-label={item.label}
                className={cn(iconButton, "max-md:hidden")}
              >
                {item.icon}
              </a>
            ))}
          {slots.sidebar && (
            <slots.sidebar.trigger
              aria-label="Menu"
              className={cn(iconButton, "-me-2 md:hidden")}
            >
              <Bars3Icon />
            </slots.sidebar.trigger>
          )}
        </div>
      </div>
    </header>
  );
}
