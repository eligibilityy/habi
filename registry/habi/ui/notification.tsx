import type { ComponentProps, ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";
import {
  notificationContentVariants,
  notificationDismissIconVariants,
  notificationDismissVariants,
  notificationTextVariants,
  notificationTitleVariants,
  notificationVariants,
} from "@/registry/habi/ui/notification.variants";
import { StatusIcon } from "@/registry/habi/ui/status-icon";

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
      <div className={notificationContentVariants()}>
        <p className={notificationTitleVariants()}>{title}</p>
        {children && (
          <div className={notificationTextVariants()}>{children}</div>
        )}
      </div>
      {onDismiss && (
        <button
          type="button"
          aria-label={dismissLabel}
          onClick={onDismiss}
          className={notificationDismissVariants()}
        >
          <XMarkIcon className={notificationDismissIconVariants()} />
        </button>
      )}
    </div>
  );
}

export { Notification, notificationVariants, type NotificationProps };
