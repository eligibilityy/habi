import type { ComponentProps } from "react";

import { cn } from "@/registry/habi/lib/utils";

// Markdown tables in docs pages, framed and styled like PropsTable so every
// table on a page looks the same.
export function DocsTable({ className, ...props }: ComponentProps<"table">) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-card border border-border-subtle-01 bg-layer-01">
      <table
        className={cn(
          "w-full text-body-sm",
          "[&_thead]:border-b [&_thead]:border-border-subtle-01 [&_thead]:bg-layer-accent-01 [&_thead]:text-text-secondary",
          "[&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:font-semibold",
          "[&_td]:px-4 [&_td]:py-3 [&_td]:align-top",
          "[&_tbody_tr]:border-border-subtle-01 [&_tbody_tr:not(:last-child)]:border-b",
          "[&_code]:font-mono",
          className,
        )}
        {...props}
      />
    </div>
  );
}
