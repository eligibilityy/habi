// Phase banner's classes. Every framework's Phase banner uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const phaseBannerVariants = cva(
  "flex items-start gap-3 border-b border-border-subtle-01 bg-layer-01 px-4 py-3 sm:items-center sm:px-8",
);

// On phones the link goes on its own line under the message.
export const phaseBannerTextVariants = cva(
  "flex flex-col items-start gap-1 text-body-sm text-text-primary sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2",
);
