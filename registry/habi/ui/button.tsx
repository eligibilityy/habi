import * as React from "react";
import { Button as BaseButton } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";
import { buttonVariants } from "@/registry/habi/ui/button.variants";

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
