import type { ComponentProps } from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import {
  selectContentVariants,
  selectGroupLabelVariants,
  selectIconVariants,
  selectItemIndicatorVariants,
  selectItemTextVariants,
  selectItemVariants,
  selectListVariants,
  selectPositionerVariants,
  selectSeparatorVariants,
  selectTriggerIconVariants,
  selectTriggerVariants,
  selectValueVariants,
} from "@/registry/habi/ui/select.variants";
import { FieldLabel, type FieldLabelProps } from "@/registry/habi/ui/field";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

function Select<Value, Multiple extends boolean | undefined = false>(
  props: SelectPrimitive.Root.Props<Value, Multiple>,
) {
  return <SelectPrimitive.Root {...props} />;
}

function SelectLabel(props: FieldLabelProps) {
  return <FieldLabel nativeLabel={false} render={<div />} {...props} />;
}

function SelectTrigger({
  className,
  children,
  ...props
}: WithStringClassName<ComponentProps<typeof SelectPrimitive.Trigger>>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(selectTriggerVariants(), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className={selectTriggerIconVariants()}>
        <ChevronDownIcon className={selectIconVariants()} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectValue({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof SelectPrimitive.Value>>) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn(selectValueVariants(), className)}
      {...props}
    />
  );
}

function SelectContent({
  className,
  children,
  ...props
}: WithStringClassName<ComponentProps<typeof SelectPrimitive.Popup>>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        alignItemWithTrigger={false}
        sideOffset={4}
        className={selectPositionerVariants()}
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(selectContentVariants(), className)}
          {...props}
        >
          <SelectPrimitive.List className={selectListVariants()}>
            {children}
          </SelectPrimitive.List>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: WithStringClassName<ComponentProps<typeof SelectPrimitive.Item>>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(selectItemVariants(), className)}
      {...props}
    >
      <SelectPrimitive.ItemText className={selectItemTextVariants()}>
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className={selectItemIndicatorVariants()}>
        <CheckIcon className={selectIconVariants()} />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

function SelectGroup(props: ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectGroupLabel({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof SelectPrimitive.GroupLabel>>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-group-label"
      className={cn(selectGroupLabelVariants(), className)}
      {...props}
    />
  );
}

function SelectSeparator({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof SelectPrimitive.Separator>>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(selectSeparatorVariants(), className)}
      {...props}
    />
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
