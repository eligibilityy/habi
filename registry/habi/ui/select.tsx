import type { ComponentProps } from "react";
import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
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
      className={cn(
        "flex h-12 w-full min-w-0 items-center gap-2 rounded-control border border-border-strong-01 bg-field-01 px-4 text-left text-body-md text-text-primary select-none",
        "hover:not-data-invalid:not-data-disabled:border-border-hover",
        "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-default data-popup-open:outline-2 data-popup-open:-outline-offset-2 data-popup-open:outline-focus-default",
        "data-invalid:border-support-error data-invalid:ring-1 data-invalid:ring-support-error data-invalid:ring-inset",
        "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:bg-layer-accent-01 data-disabled:text-text-disabled",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="ms-auto shrink-0 text-icon-primary in-data-disabled:text-text-disabled in-data-popup-open:rotate-180 motion-safe:transition-transform motion-safe:duration-(--duration-fast) motion-safe:ease-out">
        <ChevronDownIcon className="size-5" />
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
      className={cn(
        "min-w-0 flex-1 truncate in-data-disabled:text-text-disabled data-placeholder:text-text-placeholder",
        className,
      )}
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
        className="z-50 outline-none"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "w-(--anchor-width) rounded-overlay border border-border-subtle-01 bg-layer-01 p-1 shadow-overlay outline-none",
            "data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:transition-opacity motion-safe:duration-(--duration-fast) motion-safe:ease-out",
            className,
          )}
          {...props}
        >
          <SelectPrimitive.List className="max-h-[min(18.5rem,var(--available-height))] overflow-y-auto">
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
      className={cn(
        "flex min-h-12 cursor-default items-center gap-3 rounded-sm px-4 py-3 text-body-md text-text-primary outline-none select-none",
        "data-highlighted:not-data-selected:bg-background-hover data-selected:bg-highlight-default",
        "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-default",
        "data-disabled:cursor-not-allowed data-disabled:text-text-disabled",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="min-w-0 flex-1">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="shrink-0 text-interactive-default in-data-disabled:text-text-disabled">
        <CheckIcon className="size-5" />
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
      className={cn("px-4 py-2 text-label text-text-secondary", className)}
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
      className={cn("my-1 h-px bg-border-subtle-01", className)}
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
