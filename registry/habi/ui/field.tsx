import type { ComponentProps, ReactNode } from "react";
import { Field as BaseField } from "@base-ui/react/field";

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

export {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  type FieldErrorProps,
  type FieldLabelProps,
};
