import type { ComponentProps } from "react";

import { cn } from "@/registry/habi/lib/utils";

// Markdown tables in docs pages, styled like PropsTable so every table on a
// page looks the same: no frame or fills, just lines between rows.
export function DocsTable({ className, ...props }: ComponentProps<"table">) {
  return (
    <div className="not-prose my-6 overflow-x-auto">
      <table
        className={cn(
          "w-full text-body-sm",
          "[&_thead]:border-b [&_thead]:border-border-subtle-01 [&_thead]:text-text-secondary",
          "[&_th]:py-3 [&_th]:pe-4 [&_th]:text-left [&_th]:font-semibold [&_th:last-child]:pe-0",
          "[&_td]:py-3 [&_td]:pe-4 [&_td]:align-top [&_td:last-child]:pe-0",
          "[&_tbody_tr]:border-border-subtle-01 [&_tbody_tr:not(:last-child)]:border-b",
          "[&_code]:font-mono",
          className,
        )}
        {...props}
      />
    </div>
  );
}
