// Password input's classes. Every framework's Password input uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

// The field's frame. Its states come from the input inside it.
export const passwordInputVariants = cva([
  "flex h-12 w-full min-w-0 items-center gap-2 rounded-control border border-border-strong-01 bg-field-01 pe-1 text-body-md text-text-primary",
  "hover:not-has-data-invalid:not-has-data-disabled:border-border-hover",
  "has-[input:focus]:outline-2 has-[input:focus]:-outline-offset-2 has-[input:focus]:outline-focus-default",
  "has-data-invalid:border-support-error has-data-invalid:ring-1 has-data-invalid:ring-support-error has-data-invalid:ring-inset",
  "has-data-disabled:cursor-not-allowed has-data-disabled:border-border-disabled has-data-disabled:bg-layer-accent-01 has-data-disabled:text-text-disabled",
]);

export const passwordInputInputVariants = cva([
  "h-full min-w-0 flex-1 bg-transparent ps-4 outline-none placeholder:text-text-placeholder",
  // Edge adds its own reveal button; Habi's Show button replaces it.
  "[&::-ms-clear]:hidden [&::-ms-reveal]:hidden",
  "data-disabled:cursor-not-allowed data-disabled:placeholder:text-text-disabled",
]);

export const passwordInputToggleVariants = cva([
  "inline-flex h-10 shrink-0 items-center rounded-sm px-3 text-label text-link-primary",
  "hover:text-link-primary-hover hover:underline focus-visible:focus-ring",
  "disabled:cursor-not-allowed disabled:text-text-disabled disabled:no-underline",
]);

// Tells screen readers whether the password is showing.
export const passwordInputStatusVariants = cva("sr-only");
