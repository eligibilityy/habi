import {
  ChoiceLabel,
  Field,
  FieldItem,
  Fieldset,
  FieldsetLegend,
} from "@/registry/habi/ui/field";
import { Radio, RadioGroup } from "@/registry/habi/ui/radio";

const options = [
  {
    value: "pickup",
    label: "Pick up in person",
    hint: "Ready the next working day. Free.",
  },
  {
    value: "delivery",
    label: "Have it delivered",
    hint: "3 to 5 working days. ₱150.00 delivery fee.",
  },
];

export default function RadioGroupHints() {
  return (
    <Field name="collection" className="w-full max-w-80">
      <Fieldset render={<RadioGroup defaultValue="pickup" />}>
        <FieldsetLegend>How do you want to get your clearance?</FieldsetLegend>
        {options.map((option) => (
          <FieldItem key={option.value}>
            <ChoiceLabel>
              <Radio value={option.value} />
              <span className="flex flex-col">
                {option.label}
                <span className="text-body-sm text-text-secondary">
                  {option.hint}
                </span>
              </span>
            </ChoiceLabel>
          </FieldItem>
        ))}
      </Fieldset>
    </Field>
  );
}
