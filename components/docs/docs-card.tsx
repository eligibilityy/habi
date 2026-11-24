import type { ComponentProps } from "react";
import { Card as FumadocsCard } from "fumadocs-ui/components/card";

import { cn } from "@/registry/habi/lib/utils";

// rounded-(--radius-card) instead of rounded-card: Fumadocs' own
// tailwind-merge doesn't know Habi's role radii and would keep its rounded-xl.
export function DocsCard({
  className,
  ...props
}: ComponentProps<typeof FumadocsCard>) {
  return (
    <FumadocsCard
      className={cn("rounded-(--radius-card)", className)}
      {...props}
    />
  );
}
