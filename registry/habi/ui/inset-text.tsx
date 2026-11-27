import type { ComponentProps } from "react";

import { cn } from "@/registry/habi/lib/utils";

function InsetText({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="inset-text"
      className={cn(
        "flex max-w-160 flex-col gap-4 border-l-4 border-border-strong-01 py-4 pl-6 text-body-md text-text-primary",
        className,
      )}
      {...props}
    />
  );
}

export { InsetText };
