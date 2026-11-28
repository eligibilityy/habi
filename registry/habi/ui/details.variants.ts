// Details's classes. Every framework's Details uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const detailsVariants = cva("group/details max-w-160 text-body-md");

export const detailsSummaryVariants = cva([
  "inline-flex cursor-pointer list-none items-center gap-2 rounded-sm text-link-primary [&::-webkit-details-marker]:hidden",
  "decoration-from-font [text-underline-position:from-font] hover:text-link-primary-hover hover:underline",
  "focus-visible:focus-ring",
]);

export const detailsSummaryIconVariants = cva(
  "size-5 shrink-0 group-open/details:rotate-90 motion-safe:transition-transform motion-safe:duration-(--duration-fast) motion-safe:ease-out",
);

export const detailsContentVariants = cva(
  "mt-3 flex flex-col gap-4 border-l-4 border-border-subtle-01 py-4 pl-5 text-text-primary",
);
