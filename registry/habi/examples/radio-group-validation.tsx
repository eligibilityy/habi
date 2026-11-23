"use client";

import { useState } from "react";
import { Form } from "@base-ui/react/form";

import { Button } from "@/registry/habi/ui/button";
import {
  ChoiceLabel,
  Field,
  FieldError,
  FieldItem,
  Fieldset,
  FieldsetLegend,
} from "@/registry/habi/ui/field";
import { Notification } from "@/registry/habi/ui/notification";
import { Radio, RadioGroup } from "@/registry/habi/ui/radio";

const channels = [
  { value: "online-banking", label: "Online banking" },
  { value: "e-wallet", label: "E-wallet" },
  { value: "over-the-counter", label: "Over the counter" },
];

export default function RadioGroupValidation() {
  const [saved, setSaved] = useState(false);

  return (
    <Form
      className="flex w-full max-w-80 flex-col gap-6"
      onFormSubmit={() => setSaved(true)}
    >
      <p className="text-body-sm text-text-secondary">* means required</p>
      <Field name="paymentChannel">
        <Fieldset render={<RadioGroup required />}>
          <FieldsetLegend required>How will you pay?</FieldsetLegend>
          {channels.map((channel) => (
            <FieldItem key={channel.value}>
              <ChoiceLabel>
                <Radio value={channel.value} />
                {channel.label}
              </ChoiceLabel>
            </FieldItem>
          ))}
        </Fieldset>
        <FieldError match="valueMissing">
          Select how you&apos;ll pay.
        </FieldError>
      </Field>
      <Button type="submit" className="self-start">
        Continue
      </Button>
      {saved && <Notification kind="success" title="Payment method saved" />}
    </Form>
  );
}
