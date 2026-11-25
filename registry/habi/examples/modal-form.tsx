"use client";

import { useState } from "react";
import { Form } from "@base-ui/react/form";

import { Button } from "@/registry/habi/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/habi/ui/field";
import { Input } from "@/registry/habi/ui/input";
import {
  Modal,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalTitle,
  ModalTrigger,
} from "@/registry/habi/ui/modal";

export default function ModalForm() {
  const [open, setOpen] = useState(false);

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger render={<Button kind="tertiary" />}>
        Change mobile number
      </ModalTrigger>
      <ModalContent>
        <Form
          onFormSubmit={() => {
            // In a real service, save the number, then close.
            setOpen(false);
          }}
        >
          <ModalTitle>Change your mobile number</ModalTitle>
          <ModalBody>
            <Field name="mobile">
              <FieldLabel>New mobile number</FieldLabel>
              <Input type="tel" autoComplete="tel-national" required />
              <FieldDescription>
                We&apos;ll send updates about your application to this number.
              </FieldDescription>
              <FieldError match="valueMissing">
                Enter your new mobile number.
              </FieldError>
            </Field>
          </ModalBody>
          <ModalFooter>
            <ModalClose render={<Button kind="secondary" />}>
              Keep current number
            </ModalClose>
            <Button type="submit">Save number</Button>
          </ModalFooter>
        </Form>
      </ModalContent>
    </Modal>
  );
}
