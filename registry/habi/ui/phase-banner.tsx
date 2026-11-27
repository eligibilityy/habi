import type { ComponentProps } from "react";

import { cn } from "@/registry/habi/lib/utils";
import { Badge } from "@/registry/habi/ui/badge";

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
      className={cn(
        "flex items-start gap-3 border-b border-border-subtle-01 bg-layer-01 px-4 py-3 sm:items-center sm:px-8",
        className,
      )}
      {...props}
    >
      <Badge kind="info">{phase}</Badge>
      {/* On phones the link goes on its own line under the message. */}
      <p className="flex flex-col items-start gap-1 text-body-sm text-text-primary sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2">
        {children}
      </p>
    </div>
  );
}

export { PhaseBanner, type PhaseBannerProps };
