import type { ComponentProps } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { XMarkIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

const Modal = Dialog.Root;

function ModalTrigger(props: ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger data-slot="modal-trigger" {...props} />;
}

function ModalClose(props: ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close data-slot="modal-close" {...props} />;
}

type ModalContentProps = WithStringClassName<
  ComponentProps<typeof Dialog.Popup>
> & {
  /** Shows the close button in the top corner. */
  showClose?: boolean;
  /** The close button's accessible name. Translate it, like "Isara". */
  closeLabel?: string;
};

function ModalContent({
  className,
  children,
  showClose = true,
  closeLabel = "Close",
  ...props
}: ModalContentProps) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop
        data-slot="modal-backdrop"
        className="fixed inset-0 z-50 min-h-dvh bg-overlay-backdrop data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute motion-safe:transition-opacity motion-safe:duration-(--duration-short) motion-safe:ease-out"
      />
      <Dialog.Viewport className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
        <Dialog.Popup
          data-slot="modal"
          className={cn(
            "relative flex max-h-[calc(100dvh-2rem)] w-full flex-col overflow-y-auto bg-layer-01 text-text-primary shadow-modal outline-none",
            // A bottom sheet on phones, a centred dialog from 640px.
            "rounded-t-card sm:max-h-full sm:w-140 sm:max-w-full sm:rounded-card",
            "motion-safe:transition-[translate,scale,opacity] motion-safe:duration-(--duration-short) motion-safe:ease-out",
            "data-ending-style:translate-y-full data-starting-style:translate-y-full",
            "sm:data-ending-style:translate-y-0 sm:data-ending-style:scale-98 sm:data-ending-style:opacity-0 sm:data-starting-style:translate-y-0 sm:data-starting-style:scale-98 sm:data-starting-style:opacity-0",
            className,
          )}
          {...props}
        >
          {children}
          {showClose && (
            <Dialog.Close
              data-slot="modal-close-button"
              aria-label={closeLabel}
              className="absolute top-3.5 right-4 inline-flex size-8 items-center justify-center rounded-control text-icon-primary hover:bg-overlay-hover focus-visible:focus-ring sm:top-5.5 sm:right-6"
            >
              <XMarkIcon className="size-5" />
            </Dialog.Close>
          )}
        </Dialog.Popup>
      </Dialog.Viewport>
    </Dialog.Portal>
  );
}

function ModalTitle({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof Dialog.Title>>) {
  return (
    <Dialog.Title
      data-slot="modal-title"
      className={cn(
        "p-4 pe-16 text-heading-sm text-text-primary sm:px-6 sm:pe-18 sm:pt-6",
        className,
      )}
      {...props}
    />
  );
}

function ModalBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="modal-body"
      className={cn(
        "flex flex-col gap-4 px-4 pb-2 text-body-md text-text-secondary sm:px-6",
        className,
      )}
      {...props}
    />
  );
}

function ModalDescription({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof Dialog.Description>>) {
  return (
    <Dialog.Description
      data-slot="modal-description"
      className={cn("text-body-md text-text-secondary", className)}
      {...props}
    />
  );
}

function ModalFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="modal-footer"
      className={cn(
        // Put the safe choice first. Phones show the main action on top.
        "flex flex-col-reverse gap-3 px-4 pt-6 pb-8 *:w-full sm:flex-row sm:justify-end sm:gap-4 sm:p-6 sm:*:w-auto",
        className,
      )}
      {...props}
    />
  );
}

export {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalTitle,
  ModalTrigger,
  type ModalContentProps,
};
