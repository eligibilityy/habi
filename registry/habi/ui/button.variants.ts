// Button's classes. Every framework's Button uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-control px-4 text-button whitespace-nowrap select-none",
    "focus-visible:focus-ring",
    "motion-safe:active:not-data-disabled:translate-y-[0.5px]",
    "[&_svg]:size-5 [&_svg]:shrink-0",
    "data-disabled:cursor-not-allowed",
  ],
  {
    variants: {
      kind: {
        primary:
          "bg-button-primary text-text-on-color shadow-button hover:not-data-disabled:bg-button-primary-hover active:not-data-disabled:bg-button-primary-active data-disabled:bg-button-disabled data-disabled:text-text-disabled data-disabled:shadow-none",
        secondary:
          "bg-button-secondary text-text-on-color shadow-button hover:not-data-disabled:bg-button-secondary-hover data-disabled:bg-button-disabled data-disabled:text-text-disabled data-disabled:shadow-none",
        tertiary:
          "border border-button-tertiary text-button-tertiary shadow-button hover:not-data-disabled:bg-button-tertiary-hover-bg data-disabled:border-border-disabled data-disabled:text-text-disabled data-disabled:shadow-none",
        subtle:
          "bg-button-subtle text-text-primary hover:not-data-disabled:bg-button-subtle-hover data-disabled:bg-button-disabled data-disabled:text-text-disabled",
        danger:
          "bg-button-danger text-text-on-color shadow-button hover:not-data-disabled:bg-button-danger-hover data-disabled:bg-button-disabled data-disabled:text-text-disabled data-disabled:shadow-none",
      },
      iconOnly: {
        true: "w-12 px-0",
        false: "",
      },
    },
    defaultVariants: {
      kind: "primary",
      iconOnly: false,
    },
  },
);
