// Breadcrumb's classes. Every framework's Breadcrumb uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const breadcrumbListVariants = cva([
  "flex flex-wrap items-center gap-2 text-body-sm text-text-secondary",
  // Phones show only the page above the current one, as a back link.
  // It's the third item from the end: page above, separator, current page.
  "max-sm:*:hidden max-sm:[&>li:nth-last-child(3)]:inline-flex max-sm:[&>li:nth-last-child(3)_[data-slot=breadcrumb-back-icon]]:block",
]);

export const breadcrumbItemVariants = cva("inline-flex items-center");

export const breadcrumbBackIconVariants = cva("hidden");

export const breadcrumbPageVariants = cva("text-text-primary");
