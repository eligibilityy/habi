"use client";

import { useState } from "react";

import { Checkbox, CheckboxGroup } from "@/registry/habi/ui/checkbox";
import {
  ChoiceLabel,
  Field,
  FieldItem,
  Fieldset,
  FieldsetLegend,
} from "@/registry/habi/ui/field";

const requirements = [
  { value: "id", label: "One valid ID" },
  { value: "photo", label: "A recent 2 × 2 photo" },
  { value: "receipt", label: "Your payment receipt" },
];

export default function CheckboxParent() {
  const [ready, setReady] = useState<string[]>(["id"]);

  return (
    <Field name="requirements" className="w-full max-w-80">
      <Fieldset
        render={
          <CheckboxGroup
            value={ready}
            onValueChange={setReady}
            allValues={requirements.map((item) => item.value)}
          />
        }
      >
        <FieldsetLegend>What to bring</FieldsetLegend>
        <FieldItem>
          <ChoiceLabel>
            <Checkbox parent />I have everything
          </ChoiceLabel>
        </FieldItem>
        {requirements.map((item) => (
          <FieldItem key={item.value} className="ps-9">
            <ChoiceLabel>
              <Checkbox value={item.value} />
              {item.label}
            </ChoiceLabel>
          </FieldItem>
        ))}
      </Fieldset>
    </Field>
  );
}
