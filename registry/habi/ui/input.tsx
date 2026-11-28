import type { ComponentProps } from "react";
import { Input as BaseInput } from "@base-ui/react/input";

import { cn } from "@/registry/habi/lib/utils";
import { inputVariants } from "@/registry/habi/ui/input.variants";

type InputProps = Omit<ComponentProps<typeof BaseInput>, "className"> & {
  className?: string;
};

function Input({ className, ...props }: InputProps) {
  return (
    <BaseInput
      data-slot="input"
      className={cn(inputVariants(), className)}
      {...props}
    />
  );
}

export { Input, type InputProps };
