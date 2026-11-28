// Notification's classes. Every framework's Notification uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const notificationVariants = cva(
  "flex w-full items-start gap-3 rounded-card border p-4 text-text-primary",
  {
    variants: {
      kind: {
        info: "border-support-info bg-support-info-subtle",
        success: "border-support-success bg-support-success-subtle",
        warning: "border-support-warning bg-support-warning-subtle",
        error: "border-support-error bg-support-error-subtle",
      },
    },
    defaultVariants: {
      kind: "info",
    },
  },
);

export const notificationContentVariants = cva(
  "flex min-w-0 flex-1 flex-col gap-1",
);

export const notificationTitleVariants = cva("text-heading-xs");

export const notificationTextVariants = cva("text-body-sm");

export const notificationDismissVariants = cva(
  "-m-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-control text-icon-primary hover:bg-overlay-hover focus-visible:focus-ring",
);

export const notificationDismissIconVariants = cva("size-5");
