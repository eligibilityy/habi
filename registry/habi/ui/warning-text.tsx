import type { ComponentProps } from "react";

import { cn } from "@/registry/habi/lib/utils";

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
      className={cn("flex max-w-160 items-start gap-4", className)}
      {...props}
    >
      <span
        aria-hidden
        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-text-primary text-heading-sm text-text-on-color"
      >
        !
      </span>
      {/* 4px down, so the first line centres on the circle. */}
      <strong className="block pt-1 text-heading-xs text-text-primary">
        <span className="sr-only">{label}: </span>
        {children}
      </strong>
    </div>
  );
}

export { WarningText, type WarningTextProps };
