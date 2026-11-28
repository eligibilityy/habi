import type { ComponentProps } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import {
  statusIconBackingVariants,
  statusIconIconVariants,
  statusIconVariants,
} from "@/registry/habi/ui/status-icon.variants";

const statusIcons = {
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  error: ExclamationCircleIcon,
};

type StatusKind = keyof typeof statusIcons;

type StatusIconProps = ComponentProps<"span"> & { kind: StatusKind };

function StatusIcon({ kind, className, ...props }: StatusIconProps) {
  const Icon = statusIcons[kind];

  return (
    <span
      data-slot="status-icon"
      aria-hidden
      className={cn(statusIconVariants(), className)}
      {...props}
    >
      <span className={statusIconBackingVariants({ kind })} />
      <Icon className={statusIconIconVariants({ kind })} />
    </span>
  );
}

export { StatusIcon, type StatusIconProps, type StatusKind };
