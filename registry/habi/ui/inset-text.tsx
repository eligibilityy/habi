import type { ComponentProps } from "react";

import { cn } from "@/registry/habi/lib/utils";
import { insetTextVariants } from "@/registry/habi/ui/inset-text.variants";

function InsetText({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="inset-text"
      className={cn(insetTextVariants(), className)}
      {...props}
    />
  );
}

export { InsetText };
