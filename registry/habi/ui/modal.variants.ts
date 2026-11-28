// Modal's classes. Every framework's Modal uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const modalBackdropVariants = cva(
  "fixed inset-0 z-50 min-h-dvh bg-overlay-backdrop data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute motion-safe:transition-opacity motion-safe:duration-(--duration-short) motion-safe:ease-out",
);

export const modalViewportVariants = cva(
  "fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6",
);

export const modalVariants = cva([
  "relative flex max-h-[calc(100dvh-2rem)] w-full flex-col overflow-y-auto bg-layer-01 text-text-primary shadow-modal outline-none",
  // A bottom sheet on phones, a centred dialog from 640px.
  "rounded-t-card sm:max-h-full sm:w-140 sm:max-w-full sm:rounded-card",
  "motion-safe:transition-[translate,scale,opacity] motion-safe:duration-(--duration-short) motion-safe:ease-out",
  "data-ending-style:translate-y-full data-starting-style:translate-y-full",
  "sm:data-ending-style:translate-y-0 sm:data-ending-style:scale-98 sm:data-ending-style:opacity-0 sm:data-starting-style:translate-y-0 sm:data-starting-style:scale-98 sm:data-starting-style:opacity-0",
]);

export const modalCloseButtonVariants = cva(
  "absolute top-3.5 right-4 inline-flex size-8 items-center justify-center rounded-control text-icon-primary hover:bg-overlay-hover focus-visible:focus-ring sm:top-5.5 sm:right-6",
);

export const modalCloseIconVariants = cva("size-5");

export const modalTitleVariants = cva(
  "p-4 pe-16 text-heading-sm text-text-primary sm:px-6 sm:pe-18 sm:pt-6",
);

export const modalBodyVariants = cva(
  "flex flex-col gap-4 px-4 pb-2 text-body-md text-text-secondary sm:px-6",
);

export const modalDescriptionVariants = cva("text-body-md text-text-secondary");

export const modalFooterVariants = cva([
  // Put the safe choice first. Phones show the main action on top.
  "flex flex-col-reverse gap-3 px-4 pt-6 pb-8 *:w-full sm:flex-row sm:justify-end sm:gap-4 sm:p-6 sm:*:w-auto",
]);
