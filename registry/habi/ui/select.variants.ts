// Select's classes. Every framework's Select uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const selectTriggerVariants = cva([
  "flex h-12 w-full min-w-0 items-center gap-2 rounded-control border border-border-strong-01 bg-field-01 px-4 text-left text-body-md text-text-primary select-none",
  "hover:not-data-invalid:not-data-disabled:border-border-hover",
  "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-default data-popup-open:outline-2 data-popup-open:-outline-offset-2 data-popup-open:outline-focus-default",
  "data-invalid:border-support-error data-invalid:ring-1 data-invalid:ring-support-error data-invalid:ring-inset",
  "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:bg-layer-accent-01 data-disabled:text-text-disabled",
]);

export const selectTriggerIconVariants = cva(
  "ms-auto shrink-0 text-icon-primary in-data-disabled:text-text-disabled in-data-popup-open:rotate-180 motion-safe:transition-transform motion-safe:duration-(--duration-fast) motion-safe:ease-out",
);

export const selectIconVariants = cva("size-5");

export const selectValueVariants = cva(
  "min-w-0 flex-1 truncate in-data-disabled:text-text-disabled data-placeholder:text-text-placeholder",
);

export const selectPositionerVariants = cva("z-50 outline-none");

export const selectContentVariants = cva([
  "w-(--anchor-width) rounded-overlay border border-border-subtle-01 bg-layer-01 p-1 shadow-overlay outline-none",
  "data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:transition-opacity motion-safe:duration-(--duration-fast) motion-safe:ease-out",
]);

export const selectListVariants = cva(
  "max-h-[min(18.5rem,var(--available-height))] overflow-y-auto",
);

export const selectItemVariants = cva([
  "flex min-h-12 cursor-default items-center gap-3 rounded-sm px-4 py-3 text-body-md text-text-primary outline-none select-none",
  "data-highlighted:not-data-selected:bg-background-hover data-selected:bg-highlight-default",
  "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-default",
  "data-disabled:cursor-not-allowed data-disabled:text-text-disabled",
]);

export const selectItemTextVariants = cva("min-w-0 flex-1");

export const selectItemIndicatorVariants = cva(
  "shrink-0 text-interactive-default in-data-disabled:text-text-disabled",
);

export const selectGroupLabelVariants = cva(
  "px-4 py-2 text-label text-text-secondary",
);

export const selectSeparatorVariants = cva("my-1 h-px bg-border-subtle-01");
