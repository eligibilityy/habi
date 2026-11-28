// Checkbox's classes. Every framework's Checkbox uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const checkboxVariants = cva([
  "m-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm border-2 border-border-strong-01 bg-field-01 text-text-on-color",
  "focus-visible:focus-ring",
  "in-[label:hover]:border-border-hover",
  "data-checked:border-interactive-default data-checked:bg-interactive-default data-indeterminate:border-interactive-default data-indeterminate:bg-interactive-default",
  "data-checked:not-data-disabled:in-[label:hover]:border-interactive-hover data-checked:not-data-disabled:in-[label:hover]:bg-interactive-hover data-indeterminate:not-data-disabled:in-[label:hover]:border-interactive-hover data-indeterminate:not-data-disabled:in-[label:hover]:bg-interactive-hover",
  "data-invalid:not-data-checked:border-support-error",
  "data-disabled:border-border-disabled data-disabled:bg-layer-accent-01",
  "data-checked:data-disabled:border-border-disabled data-checked:data-disabled:bg-border-disabled data-indeterminate:data-disabled:border-border-disabled data-indeterminate:data-disabled:bg-border-disabled",
]);

export const checkboxIndicatorVariants = cva("flex");

export const checkboxCheckIconVariants = cva(
  "size-4 in-data-indeterminate:hidden",
);

export const checkboxIndeterminateIconVariants = cva(
  "hidden size-4 in-data-indeterminate:block",
);

export const checkboxGroupVariants = cva("flex flex-col");
