import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-label whitespace-nowrap [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      kind: {
        neutral: "bg-badge-neutral-bg text-badge-neutral-text",
        info: "bg-badge-info-bg text-badge-info-text",
        success: "bg-badge-success-bg text-badge-success-text",
        warning: "bg-badge-warning-bg text-badge-warning-text",
        error: "bg-badge-error-bg text-badge-error-text",
      },
    },
    defaultVariants: {
      kind: "neutral",
    },
  },
);

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
