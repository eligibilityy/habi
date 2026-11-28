// Link's classes. Every framework's Link uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const linkVariants = cva(
  [
    "text-link-primary visited:text-link-visited hover:text-link-primary-hover",
    "decoration-from-font [text-underline-position:from-font]",
    "rounded-sm focus-visible:focus-ring",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      size: {
        medium: "text-body-md [&_svg]:size-5",
        small: "text-body-sm [&_svg]:size-4",
      },
      standalone: {
        true: "inline-flex items-center gap-1 hover:underline",
        false: "underline",
      },
    },
    defaultVariants: {
      standalone: false,
    },
  },
);
