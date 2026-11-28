// Radio group's classes. Every framework's Radio group uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const radioVariants = cva([
  "m-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-border-strong-01 bg-field-01",
  "focus-visible:focus-ring",
  "in-[label:hover]:border-border-hover",
  "data-checked:border-interactive-default",
  "data-checked:not-data-disabled:in-[label:hover]:border-interactive-hover",
  "data-invalid:not-data-checked:border-support-error",
  "data-disabled:border-border-disabled data-disabled:bg-layer-accent-01",
  "data-checked:data-disabled:border-border-disabled",
]);

export const radioIndicatorVariants = cva(
  "size-2.5 rounded-full bg-interactive-default not-data-disabled:in-[label:hover]:bg-interactive-hover data-disabled:bg-border-disabled",
);

export const radioGroupVariants = cva("flex flex-col");
