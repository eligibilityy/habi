// Tag's classes. Every framework's Tag uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const tagVariants = cva([
  "group inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border px-4 text-label whitespace-nowrap select-none",
  "border-border-strong-01 bg-layer-01 text-text-primary",
  "hover:not-data-disabled:border-border-hover hover:not-data-disabled:bg-background-hover",
  "data-pressed:border-interactive-default data-pressed:bg-highlight-default data-pressed:pl-3 data-pressed:text-link-primary",
  "hover:not-data-disabled:data-pressed:border-interactive-hover hover:not-data-disabled:data-pressed:bg-highlight-default hover:not-data-disabled:data-pressed:text-link-primary-hover",
  "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:text-text-disabled",
  "data-disabled:data-pressed:border-border-disabled data-disabled:data-pressed:bg-layer-accent-01 data-disabled:data-pressed:text-text-disabled",
  "focus-visible:focus-ring",
]);

export const tagCheckIconVariants = cva(
  "hidden size-4 shrink-0 group-data-pressed:block",
);

export const tagGroupVariants = cva("flex flex-wrap gap-2");
