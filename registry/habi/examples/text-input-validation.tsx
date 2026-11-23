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
import { Notification } from "@/registry/habi/ui/notification";

export default function TextInputValidation() {
  const [saved, setSaved] = useState(false);

  return (
    <Form
      className="flex w-full max-w-80 flex-col gap-6"
      onFormSubmit={() => setSaved(true)}
    >
      <p className="text-body-sm text-text-secondary">* means required</p>
      <Field name="givenName">
        <FieldLabel required>Given name</FieldLabel>
        <Input required placeholder="e.g. Juan" autoComplete="given-name" />
        <FieldError match="valueMissing">Enter your given name.</FieldError>
      </Field>
      <Field name="email">
        <FieldLabel required>Email address</FieldLabel>
        <Input
          required
          type="email"
          placeholder="e.g. email@example.com"
          autoComplete="email"
        />
        <FieldDescription>
          We&apos;ll send your appointment details here.
        </FieldDescription>
        <FieldError match="valueMissing">Enter your email address.</FieldError>
        <FieldError match="typeMismatch">
          Enter an email address in the right format, like name@example.com.
        </FieldError>
      </Field>
      <Button type="submit" className="self-start">
        Continue
      </Button>
      {saved && <Notification kind="success" title="Details saved" />}
    </Form>
  );
}
