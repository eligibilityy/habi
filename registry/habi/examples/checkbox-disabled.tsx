import { Checkbox, CheckboxGroup } from "@/registry/habi/ui/checkbox";
import {
  ChoiceLabel,
  Field,
  FieldItem,
  Fieldset,
  FieldsetLegend,
} from "@/registry/habi/ui/field";

export default function CheckboxDisabled() {
  return (
    <Field name="delivery" className="w-full max-w-80">
      <Fieldset render={<CheckboxGroup defaultValue={["pickup"]} />}>
        <FieldsetLegend>How do you want to get your clearance?</FieldsetLegend>
        <FieldItem>
          <ChoiceLabel>
            <Checkbox value="pickup" />
            Pick it up at the NBI office
          </ChoiceLabel>
        </FieldItem>
        <FieldItem disabled>
          <ChoiceLabel>
            <Checkbox value="delivery" />
            Deliver it to my address (not available yet)
          </ChoiceLabel>
        </FieldItem>
      </Fieldset>
    </Field>
  );
}
