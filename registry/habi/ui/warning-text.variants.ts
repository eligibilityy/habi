// Warning text's classes. Every framework's Warning text uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const warningTextVariants = cva("flex max-w-160 items-start gap-4");

export const warningTextIconVariants = cva(
  "flex size-8 shrink-0 items-center justify-center rounded-full bg-text-primary text-heading-sm text-text-on-color",
);

// 4px down, so the first line centres on the circle.
export const warningTextTextVariants = cva(
  "block pt-1 text-heading-xs text-text-primary",
);

export const warningTextLabelVariants = cva("sr-only");
