import type { ComponentProps } from "react";
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { cn } from "@/registry/habi/lib/utils";

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
        className="z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip"
          className={cn(
            "max-w-60 origin-(--transform-origin) rounded-overlay bg-background-inverse px-3 py-2 text-body-sm text-text-inverse shadow-overlay",
            "data-ending-style:scale-98 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-98 data-starting-style:opacity-0 motion-safe:transition-[scale,opacity] motion-safe:duration-(--duration-fast) motion-safe:ease-out",
            className,
          )}
          {...props}
        >
          <TooltipPrimitive.Arrow className="flex data-[side=bottom]:-top-1.5 data-[side=left]:-right-2.25 data-[side=left]:rotate-90 data-[side=right]:-left-2.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-1.5 data-[side=top]:rotate-180">
            <svg width="12" height="6" viewBox="0 0 12 6" aria-hidden>
              <path d="M0 6 6 0l6 6Z" className="fill-background-inverse" />
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
