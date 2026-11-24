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
import { FileInput } from "@/registry/habi/ui/file-input";
import { Notification } from "@/registry/habi/ui/notification";

export default function FileInputValidation() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const message = file ? null : "Upload your barangay certificate.";

    // Render the error first so the file input can take focus.
    flushSync(() => {
      setError(message);
      setSaved(message === null);
    });
    if (message) {
      form
        .querySelector<HTMLElement>("[data-slot=file-input-control]")
        ?.focus();
    }
  }

  return (
    <Form
      className="flex w-full max-w-100 flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <Field invalid={error !== null}>
        <FieldLabel required>Barangay certificate</FieldLabel>
        <FieldDescription>
          A PDF or a photo of the certificate, up to 5 MB.
        </FieldDescription>
        <FileInput
          accept="image/jpeg,image/png,application/pdf"
          file={file}
          onFileSelect={(chosen) => {
            setFile(chosen);
            // Base UI's Form won't submit while the field is invalid, so
            // clear the error as soon as people choose a file.
            setError(null);
            setSaved(false);
          }}
          onRemove={() => {
            setFile(null);
            setSaved(false);
          }}
        />
        <FieldError match>{error}</FieldError>
      </Field>
      <Button type="submit" className="self-start">
        Continue
      </Button>
      {saved && <Notification kind="success" title="Certificate saved" />}
    </Form>
  );
}
