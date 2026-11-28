import type { ComponentProps } from "react";
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import { CheckIcon, MinusIcon } from "@heroicons/react/16/solid";

import { cn } from "@/registry/habi/lib/utils";
import {
  checkboxCheckIconVariants,
  checkboxGroupVariants,
  checkboxIndeterminateIconVariants,
  checkboxIndicatorVariants,
  checkboxVariants,
} from "@/registry/habi/ui/checkbox.variants";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

function Checkbox({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof CheckboxPrimitive.Root>>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants(), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={checkboxIndicatorVariants()}>
        <CheckIcon className={checkboxCheckIconVariants()} />
        <MinusIcon className={checkboxIndeterminateIconVariants()} />
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
      className={cn(checkboxGroupVariants(), className)}
      {...props}
    />
  );
}

export { Checkbox, CheckboxGroup };
