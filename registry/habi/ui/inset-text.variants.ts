// Inset text's classes. Every framework's Inset text uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const insetTextVariants = cva(
  "flex max-w-160 flex-col gap-4 border-l-4 border-border-strong-01 py-4 pl-6 text-body-md text-text-primary",
);
