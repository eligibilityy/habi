// Tooltip's classes. Every framework's Tooltip uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const tooltipPositionerVariants = cva("z-50");

export const tooltipVariants = cva([
  "max-w-60 origin-(--transform-origin) rounded-overlay bg-background-inverse px-3 py-2 text-body-sm text-text-inverse shadow-overlay",
  "data-ending-style:scale-98 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-98 data-starting-style:opacity-0 motion-safe:transition-[scale,opacity] motion-safe:duration-(--duration-fast) motion-safe:ease-out",
]);

export const tooltipArrowVariants = cva(
  "flex data-[side=bottom]:-top-1.5 data-[side=left]:-right-2.25 data-[side=left]:rotate-90 data-[side=right]:-left-2.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-1.5 data-[side=top]:rotate-180",
);

export const tooltipArrowShapeVariants = cva("fill-background-inverse");
