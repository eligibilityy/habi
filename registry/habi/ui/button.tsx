import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-sm px-4 text-button whitespace-nowrap select-none",
    "focus-visible:focus-ring",
    "[&_svg]:size-5 [&_svg]:shrink-0",
    "data-disabled:cursor-not-allowed",
  ],
  {
    variants: {
      kind: {
        primary:
          "bg-button-primary text-text-on-color hover:not-data-disabled:bg-button-primary-hover active:not-data-disabled:bg-button-primary-active data-disabled:bg-button-disabled data-disabled:text-text-disabled",
        secondary:
          "bg-button-secondary text-text-on-color hover:not-data-disabled:bg-button-secondary-hover data-disabled:bg-button-disabled data-disabled:text-text-disabled",
        tertiary:
          "border border-button-tertiary text-button-tertiary hover:not-data-disabled:bg-button-tertiary-hover-bg data-disabled:border-border-disabled data-disabled:text-text-disabled",
        subtle:
          "bg-button-subtle text-text-primary hover:not-data-disabled:bg-button-subtle-hover data-disabled:bg-button-disabled data-disabled:text-text-disabled",
        danger:
          "bg-button-danger text-text-on-color hover:not-data-disabled:bg-button-danger-hover data-disabled:bg-button-disabled data-disabled:text-text-disabled",
      },
      iconOnly: {
        true: "w-12 px-0",
        false: "",
      },
    },
    defaultVariants: {
      kind: "primary",
      iconOnly: false,
    },
  },
);

type ButtonProps = Omit<React.ComponentProps<typeof BaseButton>, "className"> &
  VariantProps<typeof buttonVariants> & {
    className?: string;
  };

function Button({ className, kind, iconOnly, ...props }: ButtonProps) {
  return (
    <BaseButton
      data-slot="button"
      className={cn(buttonVariants({ kind, iconOnly }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants, type ButtonProps };
