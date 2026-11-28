import type { ComponentProps } from "react";
import { OTPField } from "@base-ui/react/otp-field";

import { cn } from "@/registry/habi/lib/utils";
import {
  otpInputSlotVariants,
  otpInputVariants,
} from "@/registry/habi/ui/otp-input.variants";

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
      className={cn(otpInputVariants(), className)}
      {...props}
    >
      {Array.from({ length }, (_, index) => (
        <OTPField.Input
          key={index}
          data-slot="otp-input-slot"
          aria-label={index === 0 ? undefined : slotLabel(index + 1, length)}
          className={cn(otpInputSlotVariants())}
        />
      ))}
    </OTPField.Root>
  );
}

export { OtpInput, type OtpInputProps };
