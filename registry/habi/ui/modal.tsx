import type { ComponentProps } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { XMarkIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import {
  modalBackdropVariants,
  modalBodyVariants,
  modalCloseButtonVariants,
  modalCloseIconVariants,
  modalDescriptionVariants,
  modalFooterVariants,
  modalTitleVariants,
  modalVariants,
  modalViewportVariants,
} from "@/registry/habi/ui/modal.variants";

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
        className={modalBackdropVariants()}
      />
      <Dialog.Viewport className={modalViewportVariants()}>
        <Dialog.Popup
          data-slot="modal"
          className={cn(modalVariants(), className)}
          {...props}
        >
          {children}
          {showClose && (
            <Dialog.Close
              data-slot="modal-close-button"
              aria-label={closeLabel}
              className={modalCloseButtonVariants()}
            >
              <XMarkIcon className={modalCloseIconVariants()} />
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
      className={cn(modalTitleVariants(), className)}
      {...props}
    />
  );
}

function ModalBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="modal-body"
      className={cn(modalBodyVariants(), className)}
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
      className={cn(modalDescriptionVariants(), className)}
      {...props}
    />
  );
}

function ModalFooter({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="modal-footer"
      className={cn(modalFooterVariants(), className)}
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
