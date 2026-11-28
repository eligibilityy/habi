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
import { PasswordInput } from "@/registry/habi/ui/password-input";

function checkPassword(password: string) {
  // An empty field gets the required message instead.
  if (password === "") return null;
  if (password.length < 8)
    return "Your password must be at least 8 characters.";
  if (!/\d/.test(password)) return "Your password must include a number.";
  return null;
}

export default function PasswordInputCreate() {
  const [password, setPassword] = useState("");
  const [saved, setSaved] = useState(false);

  return (
    <Form
      className="flex w-full max-w-80 flex-col gap-6"
      onFormSubmit={() => setSaved(true)}
    >
      <Field
        name="newPassword"
        validate={(value) => checkPassword(String(value ?? ""))}
      >
        <FieldLabel required>Create a password</FieldLabel>
        <PasswordInput
          required
          autoComplete="new-password"
          value={password}
          onValueChange={(value) => {
            setPassword(value);
            setSaved(false);
          }}
        />
        <FieldDescription>
          At least 8 characters, with a number.
        </FieldDescription>
        <FieldError match="valueMissing">Create a password.</FieldError>
        <FieldError match="customError">{checkPassword(password)}</FieldError>
      </Field>
      <Button type="submit" className="self-start">
        Create account
      </Button>
      {saved && <Notification kind="success" title="Account created" />}
    </Form>
  );
}
