"use client";

import type { ComponentProps, MouseEvent } from "react";

import { cn } from "@/registry/habi/lib/utils";

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
      className={cn(
        // Hidden until focused, but never display: none, so Tab still reaches it.
        "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50",
        "rounded-control border-2 border-focus-default bg-layer-01 px-3.5 py-2.5 shadow-overlay outline-none",
        "text-body-md text-link-primary underline decoration-from-font [text-underline-position:from-font]",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export { SkipLink };
