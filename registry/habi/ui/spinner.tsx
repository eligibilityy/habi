import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";
import {
  spinnerIndicatorVariants,
  spinnerLabelVariants,
  spinnerRingVariants,
  spinnerTrackVariants,
  spinnerVariants,
} from "@/registry/habi/ui/spinner.variants";

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
        className={spinnerRingVariants()}
      >
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          className={spinnerTrackVariants({ tone: tone ?? undefined })}
        />
        {/* A quarter of the ring, from 12 o'clock to 3. */}
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          pathLength={100}
          strokeDasharray="25 75"
          transform={`rotate(-90 ${ring.size / 2} ${ring.size / 2})`}
          className={spinnerIndicatorVariants({ tone: tone ?? undefined })}
        />
      </svg>
      <span className={spinnerLabelVariants({ showLabel })}>{label}</span>
    </span>
  );
}

export { Spinner, spinnerVariants, type SpinnerProps };
