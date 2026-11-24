"use client";

import { useState, type FormEvent } from "react";
import { flushSync } from "react-dom";
import { Form } from "@base-ui/react/form";

import { Button } from "@/registry/habi/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/habi/ui/field";
import { Notification } from "@/registry/habi/ui/notification";
import { OtpInput } from "@/registry/habi/ui/otp-input";

// In a real service, your server checks the code.
const CORRECT_CODE = "123456";

export default function OtpInputValidation() {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const message =
      code.length < 6
        ? "Enter all 6 digits of the code."
        : code !== CORRECT_CODE
          ? "That code didn't match. Check the SMS and try again."
          : null;

    // Render the error first so the first box can take focus.
    flushSync(() => {
      setError(message);
      setVerified(message === null);
    });
    if (message) {
      form.querySelector<HTMLElement>("[data-slot=otp-input-slot]")?.focus();
    }
  }

  return (
    <Form
      className="flex w-full max-w-84 flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <Field name="code" invalid={error !== null}>
        <FieldLabel>Enter the 6-digit code</FieldLabel>
        <FieldDescription>
          We sent it by SMS to +63 917 *** 4567. In this example, the code is
          123456.
        </FieldDescription>
        <OtpInput
          value={code}
          onValueChange={(next) => {
            setCode(next);
            // Base UI's Form won't submit while the field is invalid, so
            // clear the error as soon as people change the code.
            setError(null);
            setVerified(false);
          }}
        />
        <FieldError match>{error}</FieldError>
      </Field>
      <Button type="submit" className="self-start">
        Continue
      </Button>
      {verified && <Notification kind="success" title="Code accepted" />}
    </Form>
  );
}
