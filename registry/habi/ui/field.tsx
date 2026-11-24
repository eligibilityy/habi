import type { ComponentProps, ReactNode } from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";

import { cn } from "@/registry/habi/lib/utils";
import { StatusIcon } from "@/registry/habi/ui/status-icon";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

function Field({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof BaseField.Root>>) {
  return (
    <BaseField.Root
      data-slot="field"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

type FieldLabelProps = WithStringClassName<
  ComponentProps<typeof BaseField.Label>
> & { required?: boolean };

function FieldLabel({
  className,
  required,
  children,
  ...props
}: FieldLabelProps) {
  return (
    <BaseField.Label
      data-slot="field-label"
      className={cn(
        "text-label text-text-primary data-disabled:text-text-disabled",
        className,
      )}
      {...props}
    >
      {children}
      {required && (
        <span
          aria-hidden
          className="ms-1 text-text-error in-data-disabled:text-text-disabled"
        >
          *
        </span>
      )}
    </BaseField.Label>
  );
}

function FieldDescription({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof BaseField.Description>>) {
  return (
    <BaseField.Description
      data-slot="field-description"
      className={cn(
        "text-helper text-text-helper data-disabled:text-text-disabled",
        className,
      )}
      {...props}
    />
  );
}

type FieldErrorProps = WithStringClassName<
  ComponentProps<typeof BaseField.Error>
> & { children: ReactNode };

function FieldError({ className, children, ...props }: FieldErrorProps) {
  // With `match`, Base UI always shows the error, so an empty one would
  // leave a lone icon. Render nothing until there's a message.
  if (children == null || children === false || children === "") return null;

  return (
    <BaseField.Error
      data-slot="field-error"
      className={cn(
        "flex items-start gap-2 text-helper text-text-error",
        className,
      )}
      {...props}
    >
      <StatusIcon kind="error" />
      <span>{children}</span>
    </BaseField.Error>
  );
}

function FieldItem({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof BaseField.Item>>) {
  return (
    <BaseField.Item
      data-slot="field-item"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function ChoiceLabel({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof BaseField.Label>>) {
  return (
    <BaseField.Label
      data-slot="choice-label"
      className={cn(
        "flex w-fit cursor-pointer items-start gap-3 py-3 text-body-md text-text-primary",
        "has-data-disabled:cursor-not-allowed has-data-disabled:text-text-disabled data-disabled:cursor-not-allowed data-disabled:text-text-disabled",
        className,
      )}
      {...props}
    />
  );
}

function Fieldset({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof BaseFieldset.Root>>) {
  return (
    <BaseFieldset.Root
      data-slot="fieldset"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

type FieldsetLegendProps = WithStringClassName<
  ComponentProps<typeof BaseFieldset.Legend>
> & { required?: boolean };

function FieldsetLegend({
  className,
  required,
  children,
  ...props
}: FieldsetLegendProps) {
  return (
    <BaseFieldset.Legend
      data-slot="fieldset-legend"
      className={cn(
        "text-label text-text-primary data-disabled:text-text-disabled",
        className,
      )}
      {...props}
    >
      {children}
      {required && (
        <span
          aria-hidden
          className="ms-1 text-text-error in-data-disabled:text-text-disabled"
        >
          *
        </span>
      )}
    </BaseFieldset.Legend>
  );
}

export {
  ChoiceLabel,
  Field,
  FieldDescription,
  FieldError,
  FieldItem,
  FieldLabel,
  Fieldset,
  FieldsetLegend,
  type FieldErrorProps,
  type FieldLabelProps,
  type FieldsetLegendProps,
};
