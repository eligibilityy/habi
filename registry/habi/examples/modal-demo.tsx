import { Button } from "@/registry/habi/ui/button";
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalTitle,
  ModalTrigger,
} from "@/registry/habi/ui/modal";

export default function ModalDemo() {
  return (
    <Modal>
      <ModalTrigger render={<Button kind="tertiary" />}>
        Cancel appointment
      </ModalTrigger>
      <ModalContent>
        <ModalTitle>Cancel this appointment?</ModalTitle>
        <ModalBody>
          <ModalDescription>
            Your appointment on 15 December 2026 at 9:00 AM will be released to
            other applicants. You can book a new one anytime.
          </ModalDescription>
        </ModalBody>
        <ModalFooter>
          <ModalClose render={<Button kind="secondary" />}>
            Keep appointment
          </ModalClose>
          {/* In a real service, cancel the appointment, then close. */}
          <ModalClose render={<Button kind="danger" />}>
            Cancel appointment
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
