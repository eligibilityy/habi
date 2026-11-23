import type { ComponentProps } from "react";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/registry/habi/lib/utils";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

function Radio({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof RadioPrimitive.Root>>) {
  return (
    <RadioPrimitive.Root
      data-slot="radio"
      className={cn(
        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-border-strong-01 bg-field-01",
        "focus-visible:focus-ring",
        "in-[label:hover]:border-border-hover",
        "data-checked:border-interactive-default",
        "data-checked:not-data-disabled:in-[label:hover]:border-interactive-hover",
        "data-invalid:not-data-checked:border-support-error",
        "data-disabled:border-border-disabled data-disabled:bg-layer-accent-01",
        "data-checked:data-disabled:border-border-disabled",
        className,
      )}
      {...props}
    >
      <RadioPrimitive.Indicator className="size-2.5 rounded-full bg-interactive-default not-data-disabled:in-[label:hover]:bg-interactive-hover data-disabled:bg-border-disabled" />
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
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

export { Radio, RadioGroup };
