"use client";

import { useState } from "react";
import { Form } from "@base-ui/react/form";

import { Button } from "@/registry/habi/ui/button";
import { Field, FieldDescription, FieldError } from "@/registry/habi/ui/field";
import { Notification } from "@/registry/habi/ui/notification";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/habi/ui/select";

const idTypes = [
  { value: "philsys", label: "PhilSys ID (National ID)" },
  { value: "passport", label: "Philippine passport" },
  { value: "drivers-license", label: "Driver's license" },
  { value: "umid", label: "UMID" },
  { value: "prc", label: "PRC ID" },
  { value: "postal", label: "Postal ID" },
  { value: "voters", label: "Voter's ID" },
];

export default function SelectValidation() {
  const [saved, setSaved] = useState(false);

  return (
    <Form
      className="flex w-full max-w-80 flex-col gap-6"
      onFormSubmit={() => setSaved(true)}
    >
      <p className="text-body-sm text-text-secondary">* means required</p>
      <Field name="idType">
        <SelectLabel required>Valid ID</SelectLabel>
        <Select items={idTypes} required>
          <SelectTrigger>
            <SelectValue placeholder="Select an ID" />
          </SelectTrigger>
          <SelectContent>
            {idTypes.map((id) => (
              <SelectItem key={id.value} value={id.value}>
                {id.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FieldDescription>Bring this ID to your appointment.</FieldDescription>
        <FieldError match="valueMissing">
          Select the ID you&apos;ll bring.
        </FieldError>
      </Field>
      <Button type="submit" className="self-start">
        Continue
      </Button>
      {saved && <Notification kind="success" title="ID saved" />}
    </Form>
  );
}
