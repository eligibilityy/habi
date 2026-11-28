import type { ComponentProps } from "react";

import { cn } from "@/registry/habi/lib/utils";
import { Badge } from "@/registry/habi/ui/badge";
import {
  phaseBannerTextVariants,
  phaseBannerVariants,
} from "@/registry/habi/ui/phase-banner.variants";

type PhaseBannerProps = ComponentProps<"div"> & {
  /** The service's phase: "Alpha" or "Beta", or a translation of them. */
  phase?: string;
};

function PhaseBanner({
  className,
  phase = "Beta",
  children,
  ...props
}: PhaseBannerProps) {
  return (
    <div
      data-slot="phase-banner"
      className={cn(phaseBannerVariants(), className)}
      {...props}
    >
      <Badge kind="info">{phase}</Badge>
      <p className={phaseBannerTextVariants()}>{children}</p>
    </div>
  );
}

export { PhaseBanner, type PhaseBannerProps };
