"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/registry/habi/lib/utils";

// The sections have no index page, so each links to its first page, and is
// marked current for any page inside it.
const sections = [
  {
    text: "Get started",
    href: "/docs",
    match: ["/docs", "/docs/installation"],
  },
  {
    text: "Foundations",
    href: "/docs/foundations/color",
    match: ["/docs/foundations"],
  },
  {
    text: "Components",
    href: "/docs/components/accordion",
    match: ["/docs/components"],
  },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Sections"
      className="ms-6 flex items-center gap-5 max-md:hidden"
    >
      {sections.map(({ text, href, match }) => {
        const current = match.some(
          (path) =>
            pathname === path ||
            (path !== "/docs" && pathname.startsWith(`${path}/`)),
        );
        return (
          <Link
            key={text}
            href={href}
            aria-current={
              pathname === href ? "page" : current ? "true" : undefined
            }
            className={cn(
              "rounded-sm text-body-sm text-text-secondary outline-none hover:text-text-primary focus-visible:focus-ring",
              current && "text-text-primary",
            )}
          >
            {text}
          </Link>
        );
      })}
    </nav>
  );
}
