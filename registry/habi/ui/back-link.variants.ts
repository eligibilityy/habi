// Back link's classes. Every framework's Back link uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

// People have always visited the page before, so it never turns purple.
export const backLinkVariants = cva("visited:text-link-primary");
