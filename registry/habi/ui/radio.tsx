import type { ComponentProps } from "react";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/registry/habi/lib/utils";
import {
  radioGroupVariants,
  radioIndicatorVariants,
  radioVariants,
} from "@/registry/habi/ui/radio.variants";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

function Radio({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof RadioPrimitive.Root>>) {
  return (
    <RadioPrimitive.Root
      data-slot="radio"
      className={cn(radioVariants(), className)}
      {...props}
    >
      <RadioPrimitive.Indicator className={radioIndicatorVariants()} />
    </RadioPrimitive.Root>
  );
}

function RadioGroup({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof RadioGroupPrimitive>>) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn(radioGroupVariants(), className)}
      {...props}
    />
  );
}

export { Radio, RadioGroup };
