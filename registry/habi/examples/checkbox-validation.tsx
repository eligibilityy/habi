"use client";

import { useState } from "react";
import { Form } from "@base-ui/react/form";

import { Button } from "@/registry/habi/ui/button";
import { Checkbox, CheckboxGroup } from "@/registry/habi/ui/checkbox";
import {
  ChoiceLabel,
  Field,
  FieldError,
  FieldItem,
  Fieldset,
  FieldsetLegend,
} from "@/registry/habi/ui/field";
import { Notification } from "@/registry/habi/ui/notification";

const ids = [
  { value: "philsys", label: "PhilSys ID (National ID)" },
  { value: "passport", label: "Philippine passport" },
  { value: "drivers-license", label: "Driver's license" },
];

export default function CheckboxValidation() {
  const [saved, setSaved] = useState(false);

  return (
    <Form
      className="flex w-full max-w-80 flex-col gap-6"
      onFormSubmit={() => setSaved(true)}
    >
      <p className="text-body-sm text-text-secondary">* means required</p>
      <Field
        name="ids"
        validate={(value) =>
          Array.isArray(value) && value.length > 0 ? null : "Select an ID"
        }
      >
        <Fieldset render={<CheckboxGroup />}>
          <FieldsetLegend required>Which IDs can you bring?</FieldsetLegend>
          {ids.map((id) => (
            <FieldItem key={id.value}>
              <ChoiceLabel>
                <Checkbox value={id.value} />
                {id.label}
              </ChoiceLabel>
            </FieldItem>
          ))}
        </Fieldset>
        <FieldError>Select at least one ID you can bring.</FieldError>
      </Field>
      <Field name="confirm">
        <ChoiceLabel>
          <Checkbox required />
          The details I gave are true and correct
        </ChoiceLabel>
        <FieldError match="valueMissing">
          Confirm that your details are true and correct.
        </FieldError>
      </Field>
      <Button type="submit" className="self-start">
        Continue
      </Button>
      {saved && <Notification kind="success" title="Details saved" />}
    </Form>
  );
}
