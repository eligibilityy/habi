import type { ComponentProps } from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { cn } from "@/registry/habi/lib/utils";
import {
  tooltipArrowShapeVariants,
  tooltipArrowVariants,
  tooltipPositionerVariants,
  tooltipVariants,
} from "@/registry/habi/ui/tooltip.variants";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

function TooltipTrigger(
  props: ComponentProps<typeof TooltipPrimitive.Trigger>,
) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

type TooltipContentProps = Omit<
  ComponentProps<typeof TooltipPrimitive.Popup>,
  "className"
> & {
  className?: string;
  /** The side of the trigger it appears on. */
  side?: ComponentProps<typeof TooltipPrimitive.Positioner>["side"];
  /** Where it sits along that side. */
  align?: ComponentProps<typeof TooltipPrimitive.Positioner>["align"];
  /** The gap between the trigger and the arrow's tip, in pixels. */
  sideOffset?: number;
};

function TooltipContent({
  className,
  side = "top",
  align = "center",
  sideOffset = 8,
  children,
  ...props
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        side={side}
        align={align}
        sideOffset={sideOffset}
        collisionPadding={8}
        className={tooltipPositionerVariants()}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip"
          className={cn(tooltipVariants(), className)}
          {...props}
        >
          <TooltipPrimitive.Arrow className={tooltipArrowVariants()}>
            <svg width="12" height="6" viewBox="0 0 12 6" aria-hidden>
              <path d="M0 6 6 0l6 6Z" className={tooltipArrowShapeVariants()} />
            </svg>
          </TooltipPrimitive.Arrow>
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  type TooltipContentProps,
};
