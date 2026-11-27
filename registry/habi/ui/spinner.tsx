import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";

const spinnerVariants = cva("inline-flex shrink-0 items-center", {
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

// Ring size and thickness, in px.
const rings = {
  small: { size: 16, stroke: 2 },
  medium: { size: 24, stroke: 3 },
  large: { size: 48, stroke: 4 },
};

type SpinnerProps = Omit<ComponentProps<"span">, "children"> &
  VariantProps<typeof spinnerVariants> & {
    /** What's loading. Read out by screen readers, and shown with reduced motion. */
    label?: string;
    /** Show the label next to the ring. */
    showLabel?: boolean;
  };

function Spinner({
  className,
  size,
  tone,
  label = "Loading…",
  showLabel = false,
  ...props
}: SpinnerProps) {
  const ring = rings[size ?? "small"];
  const radius = (ring.size - ring.stroke) / 2;

  return (
    <span
      data-slot="spinner"
      role="status"
      className={cn(spinnerVariants({ size, tone }), className)}
      {...props}
    >
      <svg
        aria-hidden
        viewBox={`0 0 ${ring.size} ${ring.size}`}
        fill="none"
        strokeWidth={ring.stroke}
        // An inline size, so a parent's svg sizing (like Button's) can't stretch it.
        style={{ width: ring.size, height: ring.size }}
        className="shrink-0 motion-safe:animate-spin"
      >
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          className={
            tone === "inverse"
              ? "stroke-text-on-color opacity-30"
              : "stroke-border-subtle-01"
          }
        />
        {/* A quarter of the ring, from 12 o'clock to 3. */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          pathLength={100}
          strokeDasharray="25 75"
          transform={`rotate(-90 ${ring.size / 2} ${ring.size / 2})`}
          className={
            tone === "inverse"
              ? "stroke-text-on-color"
              : "stroke-interactive-default"
          }
        />
      </svg>
      {/* With reduced motion the ring stops, so the label shows instead. */}
      <span className={cn(!showLabel && "sr-only motion-reduce:not-sr-only")}>
        {label}
      </span>
    </span>
  );
}

export { Spinner, spinnerVariants, type SpinnerProps };
