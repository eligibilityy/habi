import type { ComponentProps } from "react";
import { Input as BaseInput } from "@base-ui/react/input";

import { cn } from "@/registry/habi/lib/utils";

type InputProps = Omit<ComponentProps<typeof BaseInput>, "className"> & {
  className?: string;
};

function Input({ className, ...props }: InputProps) {
  return (
    <BaseInput
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-control border border-border-strong-01 bg-field-01 px-4 text-body-md text-text-primary placeholder:text-text-placeholder",
        "hover:not-data-invalid:not-data-disabled:border-border-hover",
        "focus:outline-2 focus:-outline-offset-2 focus:outline-focus-default",
        "data-invalid:border-support-error data-invalid:ring-1 data-invalid:ring-support-error data-invalid:ring-inset",
        "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:bg-layer-accent-01 data-disabled:text-text-disabled data-disabled:placeholder:text-text-disabled",
        className,
      )}
      {...props}
    />
  );
}

export { Input, type InputProps };
