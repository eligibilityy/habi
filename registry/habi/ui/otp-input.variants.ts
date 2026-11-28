// OTP input's classes. Every framework's OTP input uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const otpInputVariants = cva("flex gap-2");

export const otpInputSlotVariants = cva([
  "h-14 w-12 min-w-0 rounded-control border border-border-strong-01 bg-field-01 text-center text-heading-md text-text-primary tabular-nums",
  "hover:not-data-invalid:not-data-disabled:border-border-hover",
  "focus:outline-2 focus:-outline-offset-2 focus:outline-focus-default",
  "data-invalid:border-support-error data-invalid:ring-1 data-invalid:ring-support-error data-invalid:ring-inset",
  "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:bg-layer-accent-01 data-disabled:text-text-disabled",
]);
