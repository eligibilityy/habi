// Accordion's classes. Every framework's Accordion uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const accordionVariants = cva(
  "flex w-full flex-col border-b border-border-subtle-01",
);

export const accordionItemVariants = cva("border-t border-border-subtle-01");

export const accordionTriggerVariants = cva([
  "group flex w-full cursor-pointer items-center gap-4 p-4 text-left text-heading-xs text-text-primary",
  "hover:bg-background-hover",
  "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-default",
]);

export const accordionTriggerLabelVariants = cva("min-w-0 flex-1");

export const accordionTriggerIconVariants = cva(
  "size-5 shrink-0 text-icon-primary group-data-panel-open:rotate-180 motion-safe:transition-transform motion-safe:duration-(--duration-fast) motion-safe:ease-out",
);

export const accordionPanelVariants = cva(
  "h-(--accordion-panel-height) overflow-hidden data-ending-style:h-0 data-starting-style:h-0 motion-safe:transition-[height] motion-safe:duration-(--duration-short) motion-safe:ease-out",
);

export const accordionPanelContentVariants = cva(
  "px-4 pb-6 text-body-md text-text-secondary sm:pr-16",
);
