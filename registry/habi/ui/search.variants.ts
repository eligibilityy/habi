// Search's classes. Every framework's Search uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const searchVariants = cva([
  "group/search flex h-12 w-full min-w-0 cursor-text items-center gap-3 rounded-control border border-border-strong-01 bg-field-01 px-4 text-body-md text-text-primary",
  "hover:not-data-invalid:not-data-disabled:border-border-hover",
  "focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus-default",
  "data-invalid:border-support-error data-invalid:ring-1 data-invalid:ring-support-error data-invalid:ring-inset",
  "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:bg-layer-accent-01 data-disabled:text-text-disabled",
]);

export const searchIconVariants = cva(
  "size-5 shrink-0 text-icon-secondary group-data-disabled/search:text-text-disabled",
);

export const searchInputVariants = cva([
  "h-full min-w-0 flex-1 bg-transparent outline-none placeholder:text-text-placeholder",
  "[&::-webkit-search-cancel-button]:appearance-none",
  "data-disabled:cursor-not-allowed data-disabled:placeholder:text-text-disabled",
]);

export const searchShortcutVariants = cva(
  "hidden shrink-0 rounded-sm border border-border-subtle-01 px-1.5 text-mono-xs text-text-secondary group-has-[[data-slot=search-clear]]/search:hidden! group-data-disabled/search:hidden! pointer-fine:inline-flex",
);

export const searchClearVariants = cva(
  "-m-0.5 inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-control text-icon-primary hover:bg-overlay-hover focus-visible:focus-ring",
);

export const searchClearIconVariants = cva("size-5");

export const searchPositionerVariants = cva("z-50 outline-none");

export const searchContentVariants = cva([
  "w-(--anchor-width) max-w-(--available-width) rounded-overlay border border-border-subtle-01 bg-layer-01 p-1 shadow-overlay outline-none",
  "data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:transition-opacity motion-safe:duration-(--duration-fast) motion-safe:ease-out",
]);

export const searchListVariants = cva(
  "max-h-[min(27rem,var(--available-height))] scroll-py-1 overflow-y-auto overscroll-contain outline-none",
);

export const searchItemVariants = cva([
  "flex min-h-12 cursor-default items-center gap-3 rounded-sm px-4 py-3 text-body-md text-text-primary outline-none select-none",
  "[&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-icon-secondary",
  "data-highlighted:bg-background-hover",
  "data-disabled:cursor-not-allowed data-disabled:text-text-disabled",
]);

export const searchItemTextVariants = cva("min-w-0 flex-1");

export const searchItemDescriptionVariants = cva(
  "block text-body-sm text-text-secondary in-data-disabled:text-text-disabled",
);

export const searchEmptyVariants = cva(
  "px-4 py-3 text-body-md text-text-secondary empty:p-0",
);
