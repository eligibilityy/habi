import type { ComponentProps } from "react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";

const statusIcons = {
  info: {
    Icon: InformationCircleIcon,
    color: "text-support-info",
    backing: "inset-[17.5%] rounded-full bg-white",
  },
  success: {
    Icon: CheckCircleIcon,
    color: "text-support-success",
    backing: "inset-[17.5%] rounded-full bg-white",
  },
  warning: {
    Icon: ExclamationTriangleIcon,
    color: "text-support-warning",
    backing: "inset-x-[45%] top-[23.75%] bottom-[28.75%] bg-icon-primary",
  },
  error: {
    Icon: ExclamationCircleIcon,
    color: "text-support-error",
    backing: "inset-[17.5%] rounded-full bg-white",
  },
};

type StatusKind = keyof typeof statusIcons;

type StatusIconProps = ComponentProps<"span"> & { kind: StatusKind };

function StatusIcon({ kind, className, ...props }: StatusIconProps) {
  const { Icon, color, backing } = statusIcons[kind];

  return (
    <span
      data-slot="status-icon"
      aria-hidden
      className={cn("relative inline-block size-5 shrink-0", className)}
      {...props}
    >
      <span className={cn("absolute", backing)} />
      <Icon className={cn("relative size-5", color)} />
    </span>
  );
}

export { StatusIcon, type StatusIconProps, type StatusKind };
