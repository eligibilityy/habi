import {
  ChoiceLabel,
  Field,
  FieldItem,
  Fieldset,
  FieldsetLegend,
} from "@/registry/habi/ui/field";
import { Radio, RadioGroup } from "@/registry/habi/ui/radio";

export default function RadioGroupDisabled() {
  return (
    <Field name="collection" className="w-full max-w-80">
      <Fieldset render={<RadioGroup defaultValue="pickup" />}>
        <FieldsetLegend>How do you want to get your clearance?</FieldsetLegend>
        <FieldItem>
          <ChoiceLabel>
            <Radio value="pickup" />
            Pick up in person
          </ChoiceLabel>
        </FieldItem>
        <FieldItem disabled>
          <ChoiceLabel>
            <Radio value="delivery" />
            Have it delivered (not available in your area)
          </ChoiceLabel>
        </FieldItem>
      </Fieldset>
    </Field>
  );
}
