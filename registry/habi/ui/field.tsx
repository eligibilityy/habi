import type { ComponentProps, ReactNode } from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { Fieldset as BaseFieldset } from "@base-ui/react/fieldset";

import { cn } from "@/registry/habi/lib/utils";
import {
  choiceLabelVariants,
  fieldDescriptionVariants,
  fieldErrorVariants,
  fieldItemVariants,
  fieldLabelVariants,
  fieldRequiredVariants,
  fieldVariants,
  fieldsetLegendVariants,
  fieldsetVariants,
} from "@/registry/habi/ui/field.variants";
import { StatusIcon } from "@/registry/habi/ui/status-icon";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

function Field({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof BaseField.Root>>) {
  return (
    <BaseField.Root
      data-slot="field"
      className={cn(fieldVariants(), className)}
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
      className={cn(fieldLabelVariants(), className)}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden className={fieldRequiredVariants()}>
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
      className={cn(fieldDescriptionVariants(), className)}
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
      className={cn(fieldErrorVariants(), className)}
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
      className={cn(fieldItemVariants(), className)}
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
      className={cn(choiceLabelVariants(), className)}
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
      className={cn(fieldsetVariants(), className)}
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
      className={cn(fieldsetLegendVariants(), className)}
      {...props}
    >
      {children}
      {required && (
        <span aria-hidden className={fieldRequiredVariants()}>
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
