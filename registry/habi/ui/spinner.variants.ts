// Spinner's classes. Every framework's Spinner uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const spinnerVariants = cva("inline-flex shrink-0 items-center", {
  variants: {
    size: {
      small: "gap-2 text-body-sm",
      medium: "gap-2 text-body-md",
      large: "gap-3 text-body-md",
    },
    tone: {
      default: "text-text-secondary",
      inverse: "text-text-on-color",
    },
  },
  defaultVariants: {
    size: "small",
    tone: "default",
  },
});

export const spinnerRingVariants = cva("shrink-0 motion-safe:animate-spin");

// The full ring, behind the moving part.
export const spinnerTrackVariants = cva("", {
  variants: {
    tone: {
      default: "stroke-border-subtle-01",
      inverse: "stroke-text-on-color opacity-30",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

// The moving quarter of the ring.
export const spinnerIndicatorVariants = cva("", {
  variants: {
    tone: {
      default: "stroke-interactive-default",
      inverse: "stroke-text-on-color",
    },
  },
  defaultVariants: {
    tone: "default",
  },
});

// With reduced motion the ring stops, so the label shows instead.
export const spinnerLabelVariants = cva("", {
  variants: {
    showLabel: {
      true: "",
      false: "sr-only motion-reduce:not-sr-only",
    },
  },
  defaultVariants: {
    showLabel: false,
  },
});
