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
import { Notification } from "@/registry/habi/ui/notification";
import { Textarea, TextareaCharacterCount } from "@/registry/habi/ui/textarea";

const characterLimit = 100;

export default function TextareaValidation() {
  const [reason, setReason] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <Form
      className="flex w-full max-w-100 flex-col gap-6"
      onFormSubmit={() => setSaved(true)}
    >
      <Field
        name="reason"
        validate={(value) =>
          String(value ?? "").length > characterLimit
            ? "Your reason is too long."
            : null
        }
      >
        <FieldLabel required>Why do you need a new copy?</FieldLabel>
        <Textarea
          required
          value={reason}
          onValueChange={(value) => {
            setReason(value);
            setSaved(false);
          }}
          characterLimit={characterLimit}
        />
        <FieldDescription>
          A few sentences is enough. Don&apos;t include ID numbers.
        </FieldDescription>
        <FieldError match="valueMissing">
          Tell us why you need a new copy.
        </FieldError>
        <FieldError match="customError">Your reason is too long.</FieldError>
        <TextareaCharacterCount
          value={reason}
          limit={characterLimit}
          overLimitMessage="Your reason is too long"
        />
      </Field>
      <Button type="submit" className="self-start">
        Continue
      </Button>
      {saved && <Notification kind="success" title="Reason saved" />}
    </Form>
  );
}
