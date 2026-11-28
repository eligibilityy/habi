import type { ComponentProps } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import {
  detailsContentVariants,
  detailsSummaryIconVariants,
  detailsSummaryVariants,
  detailsVariants,
} from "@/registry/habi/ui/details.variants";

/**
 * Native `<details>`: it opens with Enter or Space, works before JavaScript
 * loads, and the browser's find-in-page opens it to show a match.
 */
function Details({ className, ...props }: ComponentProps<"details">) {
  return (
    <details
      data-slot="details"
      className={cn(detailsVariants(), className)}
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
      className={cn(detailsSummaryVariants(), className)}
      {...props}
    >
      <ChevronRightIcon aria-hidden className={detailsSummaryIconVariants()} />
      {children}
    </summary>
  );
}

function DetailsContent({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="details-content"
      className={cn(detailsContentVariants(), className)}
      {...props}
    />
  );
}

export { Details, DetailsContent, DetailsSummary };
