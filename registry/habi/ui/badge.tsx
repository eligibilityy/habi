import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";
import { badgeVariants } from "@/registry/habi/ui/badge.variants";

type BadgeProps = ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

function Badge({ className, kind, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ kind }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants, type BadgeProps };
