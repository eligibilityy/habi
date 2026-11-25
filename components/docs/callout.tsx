import type { ComponentProps } from "react";
import { Callout as FumadocsCallout } from "fumadocs-ui/components/callout";

import { cn } from "@/registry/habi/lib/utils";

// Flat: a grey fill instead of a border. rounded-(--radius-card) instead of
// rounded-card: Fumadocs' own tailwind-merge doesn't know Habi's role radii
// and would keep its rounded-xl.
export function Callout({
  className,
  ...props
}: ComponentProps<typeof FumadocsCallout>) {
  return (
    <FumadocsCallout
      className={cn(
        "rounded-(--radius-card) border-0 bg-layer-accent-01",
        className,
      )}
      {...props}
    />
  );
}
