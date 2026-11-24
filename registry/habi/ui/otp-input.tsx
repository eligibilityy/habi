import type { ComponentProps } from "react";
import { OTPField } from "@base-ui/react/otp-field";

import { cn } from "@/registry/habi/lib/utils";

type OtpInputProps = Omit<
  ComponentProps<typeof OTPField.Root>,
  "className" | "length"
> & {
  className?: string;
  /** How many boxes to show. */
  length?: number;
  /** Names boxes 2 onwards for screen readers. The first box uses the field's label. */
  slotLabel?: (position: number, length: number) => string;
};

const defaultSlotLabel = (position: number, length: number) =>
  `Digit ${position} of ${length}`;

function OtpInput({
  className,
  length = 6,
  slotLabel = defaultSlotLabel,
  ...props
}: OtpInputProps) {
  return (
    <OTPField.Root
      data-slot="otp-input"
      length={length}
      className={cn("flex gap-2", className)}
      {...props}
    >
      {Array.from({ length }, (_, index) => (
        <OTPField.Input
          key={index}
          data-slot="otp-input-slot"
          aria-label={index === 0 ? undefined : slotLabel(index + 1, length)}
          className={cn(
            "h-14 w-12 min-w-0 rounded-control border border-border-strong-01 bg-field-01 text-center text-heading-md text-text-primary tabular-nums",
            "hover:not-data-invalid:not-data-disabled:border-border-hover",
            "focus:outline-2 focus:-outline-offset-2 focus:outline-focus-default",
            "data-invalid:border-support-error data-invalid:ring-1 data-invalid:ring-support-error data-invalid:ring-inset",
            "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:bg-layer-accent-01 data-disabled:text-text-disabled",
          )}
        />
      ))}
    </OTPField.Root>
  );
}

export { OtpInput, type OtpInputProps };
