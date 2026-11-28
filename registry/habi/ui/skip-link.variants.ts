// Skip link's classes. Every framework's Skip link uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const skipLinkVariants = cva([
  // Hidden until focused, but never display: none, so Tab still reaches it.
  "sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50",
  "rounded-control border-2 border-focus-default bg-layer-01 px-3.5 py-2.5 shadow-overlay outline-none",
  "text-body-md text-link-primary underline decoration-from-font [text-underline-position:from-font]",
]);
