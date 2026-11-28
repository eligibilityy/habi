// File input's classes. Every framework's File input uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

import { buttonVariants } from "@/registry/habi/ui/button.variants";
import { linkVariants } from "@/registry/habi/ui/link.variants";

export const fileInputVariants = cva("w-full");

// The drop zone. It's hidden once a file is chosen.
export const fileInputZoneVariants = cva(
  [
    "relative flex flex-col items-center gap-3 rounded-card border border-dashed border-border-strong-01 bg-background-default p-6 text-center",
    "data-dragging:border-2 data-dragging:border-interactive-default data-dragging:bg-highlight-default data-dragging:p-[23px]",
    "has-data-invalid:border-2 has-data-invalid:border-support-error has-data-invalid:p-[23px]",
    "has-disabled:border-border-disabled has-disabled:bg-layer-accent-01",
  ],
  {
    variants: {
      hasFile: {
        true: "hidden",
        false: "",
      },
    },
    defaultVariants: {
      hasFile: false,
    },
  },
);

export const fileInputControlVariants = cva(
  "peer absolute inset-0 size-full cursor-pointer opacity-0 file:cursor-pointer disabled:cursor-not-allowed",
);

export const fileInputIconVariants = cva(
  "size-8 text-icon-secondary peer-disabled:text-text-disabled",
);

export const fileInputPromptVariants = cva(
  "text-body-sm text-text-secondary peer-disabled:text-text-disabled",
);

// Looks like a Tertiary button, but the real control is the file input on top
// of the zone, so it follows the input's hover, focus and disabled states.
export const fileInputButtonVariants = cva([
  buttonVariants({ kind: "tertiary" }),
  "peer-hover:bg-button-tertiary-hover-bg peer-focus-visible:focus-ring",
  "peer-disabled:border-border-disabled peer-disabled:bg-transparent peer-disabled:text-text-disabled peer-disabled:shadow-none",
]);

export const fileInputFileVariants = cva(
  "flex items-center gap-3 rounded-card border border-border-subtle-01 bg-layer-01 py-3 ps-4 pe-3",
);

export const fileInputFileIconVariants = cva(
  "size-6 shrink-0 text-icon-secondary",
);

export const fileInputFileInfoVariants = cva(
  "flex min-w-0 flex-1 flex-col gap-1",
);

export const fileInputFileNameVariants = cva(
  "truncate text-label text-text-primary",
);

export const fileInputFileSizeVariants = cva("text-helper text-text-helper");

export const fileInputProgressTrackVariants = cva(
  "h-1 overflow-hidden rounded-full bg-border-subtle-01",
);

export const fileInputProgressIndicatorVariants = cva(
  "block h-full rounded-full bg-interactive-default motion-safe:transition-[width] motion-safe:duration-(--duration-fast) motion-safe:ease-out",
);

// Cancel (an icon button) while uploading, then Remove (a small link).
export const fileInputActionVariants = cva(
  "shrink-0 disabled:cursor-not-allowed disabled:text-text-disabled",
  {
    variants: {
      uploading: {
        true: "-m-0.5 inline-flex size-6 items-center justify-center rounded-control text-icon-primary hover:not-disabled:bg-overlay-hover focus-visible:focus-ring",
        false: linkVariants({ size: "small", standalone: true }),
      },
    },
    defaultVariants: {
      uploading: false,
    },
  },
);

export const fileInputCancelIconVariants = cva("size-5");

export const fileInputHiddenTextVariants = cva("sr-only");
