"use client";

import type { ComponentProps, MouseEvent } from "react";

import { cn } from "@/registry/habi/lib/utils";
import { skipLinkVariants } from "@/registry/habi/ui/skip-link.variants";

/**
 * Moves focus to the element the link points at. Browsers scroll to it but
 * don't always focus it, and `<main>` can't take focus unless it has a
 * tabindex, so add a temporary one.
 */
function focusTarget(event: MouseEvent<HTMLAnchorElement>) {
  const id = event.currentTarget.hash.slice(1);
  const target = id ? document.getElementById(decodeURIComponent(id)) : null;
  if (!target) return;

  if (!target.hasAttribute("tabindex")) {
    target.setAttribute("tabindex", "-1");
    target.addEventListener("blur", () => target.removeAttribute("tabindex"), {
      once: true,
    });
  }
  target.focus();
}

function SkipLink({
  className,
  href = "#main-content",
  children = "Skip to main content",
  onClick,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      data-slot="skip-link"
      href={href}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) focusTarget(event);
      }}
      className={cn(skipLinkVariants(), className)}
      {...props}
    >
      {children}
    </a>
  );
}

export { SkipLink };
