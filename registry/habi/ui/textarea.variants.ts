// Textarea's classes. Every framework's Textarea uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const textareaVariants = cva([
  "field-sizing-content min-h-32 w-full min-w-0 resize-y rounded-control border border-border-strong-01 bg-field-01 px-4 py-3 text-body-md text-text-primary placeholder:text-text-placeholder",
  "hover:not-data-invalid:not-data-over-limit:not-data-disabled:border-border-hover",
  "focus:outline-2 focus:-outline-offset-2 focus:outline-focus-default",
  "data-invalid:border-support-error data-invalid:ring-1 data-invalid:ring-support-error data-invalid:ring-inset",
  "data-over-limit:border-support-error data-over-limit:ring-1 data-over-limit:ring-support-error data-over-limit:ring-inset",
  "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:bg-layer-accent-01 data-disabled:text-text-disabled data-disabled:placeholder:text-text-disabled",
]);

export const textareaCharacterCountVariants = cva("flex flex-col");

export const textareaCountTextVariants = cva(
  "flex items-start gap-2 text-helper in-data-disabled:text-text-disabled",
  {
    variants: {
      invalid: {
        true: "text-text-error",
        false: "text-text-helper",
      },
    },
    defaultVariants: {
      invalid: false,
    },
  },
);

// The field's error message carries the icon once it shows.
export const textareaCountIconVariants = cva("in-data-invalid:hidden");

export const textareaCountTriggerVariants = cva("block w-fit");

// Text for screen readers only: the limit and the delayed count.
export const textareaScreenReaderTextVariants = cva("sr-only");
