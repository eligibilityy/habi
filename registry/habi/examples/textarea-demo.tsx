"use client";

import { useState } from "react";

import { Field, FieldDescription, FieldLabel } from "@/registry/habi/ui/field";
import { Textarea, TextareaCharacterCount } from "@/registry/habi/ui/textarea";

const characterLimit = 500;

export default function TextareaDemo() {
  const [reason, setReason] = useState("");

  return (
    <Field className="w-full max-w-100">
      <FieldLabel>Why do you need a new copy?</FieldLabel>
      <Textarea
        value={reason}
        onValueChange={setReason}
        characterLimit={characterLimit}
        placeholder="For example, my surname is misspelled."
      />
      <FieldDescription>
        A few sentences is enough. Don&apos;t include ID numbers.
      </FieldDescription>
      <TextareaCharacterCount
        value={reason}
        limit={characterLimit}
        overLimitMessage="Your reason is too long"
      />
    </Field>
  );
}
