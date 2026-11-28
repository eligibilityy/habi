import type { ComponentProps } from "react";

import { cn } from "@/registry/habi/lib/utils";
import {
  warningTextIconVariants,
  warningTextLabelVariants,
  warningTextTextVariants,
  warningTextVariants,
} from "@/registry/habi/ui/warning-text.variants";

type WarningTextProps = ComponentProps<"div"> & {
  /** Read out before the text, in place of the "!" icon. */
  label?: string;
};

function WarningText({
  className,
  label = "Warning",
  children,
  ...props
}: WarningTextProps) {
  return (
    <div
      data-slot="warning-text"
      className={cn(warningTextVariants(), className)}
      {...props}
    >
      <span aria-hidden className={warningTextIconVariants()}>
        !
      </span>
      <strong className={warningTextTextVariants()}>
        <span className={warningTextLabelVariants()}>{label}: </span>
        {children}
      </strong>
    </div>
  );
}

export { WarningText, type WarningTextProps };
