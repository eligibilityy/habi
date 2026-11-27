import type { ComponentProps } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";

/**
 * Native `<details>`: it opens with Enter or Space, works before JavaScript
 * loads, and the browser's find-in-page opens it to show a match.
 */
function Details({ className, ...props }: ComponentProps<"details">) {
  return (
    <details
      data-slot="details"
      className={cn("group/details max-w-160 text-body-md", className)}
      {...props}
    />
  );
}

function DetailsSummary({
  className,
  children,
  ...props
}: ComponentProps<"summary">) {
  return (
    <summary
      data-slot="details-summary"
      className={cn(
        "inline-flex cursor-pointer list-none items-center gap-2 rounded-sm text-link-primary [&::-webkit-details-marker]:hidden",
        "decoration-from-font [text-underline-position:from-font] hover:text-link-primary-hover hover:underline",
        "focus-visible:focus-ring",
        className,
      )}
      {...props}
    >
      <ChevronRightIcon
        aria-hidden
        className="size-5 shrink-0 group-open/details:rotate-90 motion-safe:transition-transform motion-safe:duration-(--duration-fast) motion-safe:ease-out"
      />
      {children}
    </summary>
  );
}

function DetailsContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="details-content"
      className={cn(
        "mt-3 flex flex-col gap-4 border-l-4 border-border-subtle-01 py-4 pl-5 text-text-primary",
        className,
      )}
      {...props}
    />
  );
}

export { Details, DetailsContent, DetailsSummary };
