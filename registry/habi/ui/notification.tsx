import type { ComponentProps, ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";
import { StatusIcon } from "@/registry/habi/ui/status-icon";

const notificationVariants = cva(
  "flex w-full items-start gap-3 rounded-card border p-4 text-text-primary",
  {
    variants: {
      kind: {
        info: "border-support-info bg-support-info-subtle",
        success: "border-support-success bg-support-success-subtle",
        warning: "border-support-warning bg-support-warning-subtle",
        error: "border-support-error bg-support-error-subtle",
      },
    },
    defaultVariants: {
      kind: "info",
    },
  },
);

type NotificationProps = Omit<ComponentProps<"div">, "title"> &
  VariantProps<typeof notificationVariants> & {
    title: ReactNode;
    onDismiss?: () => void;
    dismissLabel?: string;
  };

function Notification({
  className,
  kind,
  title,
  children,
  onDismiss,
  dismissLabel = "Dismiss",
  ...props
}: NotificationProps) {
  const statusKind = kind ?? "info";

  return (
    <div
      data-slot="notification"
      role={statusKind === "error" ? "alert" : "status"}
      className={cn(notificationVariants({ kind }), className)}
      {...props}
    >
      <StatusIcon kind={statusKind} />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <p className="text-heading-xs">{title}</p>
        {children && <div className="text-body-sm">{children}</div>}
      </div>
      {onDismiss && (
        <button
          type="button"
          aria-label={dismissLabel}
          onClick={onDismiss}
          className="-m-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-control text-icon-primary focus-visible:focus-ring"
        >
          <XMarkIcon className="size-5" />
        </button>
      )}
    </div>
  );
}

export { Notification, notificationVariants, type NotificationProps };
