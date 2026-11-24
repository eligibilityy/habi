import type { ComponentProps } from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import { CheckIcon, MinusIcon } from "@heroicons/react/16/solid";

import { cn } from "@/registry/habi/lib/utils";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

function Checkbox({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof CheckboxPrimitive.Root>>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "m-0.5 flex size-5 shrink-0 items-center justify-center rounded-sm border-2 border-border-strong-01 bg-field-01 text-text-on-color",
        "focus-visible:focus-ring",
        "in-[label:hover]:border-border-hover",
        "data-checked:border-interactive-default data-checked:bg-interactive-default data-indeterminate:border-interactive-default data-indeterminate:bg-interactive-default",
        "data-checked:not-data-disabled:in-[label:hover]:border-interactive-hover data-checked:not-data-disabled:in-[label:hover]:bg-interactive-hover data-indeterminate:not-data-disabled:in-[label:hover]:border-interactive-hover data-indeterminate:not-data-disabled:in-[label:hover]:bg-interactive-hover",
        "data-invalid:not-data-checked:border-support-error",
        "data-disabled:border-border-disabled data-disabled:bg-layer-accent-01",
        "data-checked:data-disabled:border-border-disabled data-checked:data-disabled:bg-border-disabled data-indeterminate:data-disabled:border-border-disabled data-indeterminate:data-disabled:bg-border-disabled",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex">
        <CheckIcon className="size-4 in-data-indeterminate:hidden" />
        <MinusIcon className="hidden size-4 in-data-indeterminate:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

function CheckboxGroup({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof CheckboxGroupPrimitive>>) {
  return (
    <CheckboxGroupPrimitive
      data-slot="checkbox-group"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

export { Checkbox, CheckboxGroup };
