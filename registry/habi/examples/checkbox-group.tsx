import { Checkbox, CheckboxGroup } from "@/registry/habi/ui/checkbox";
import {
  ChoiceLabel,
  Field,
  FieldDescription,
  FieldItem,
  Fieldset,
  FieldsetLegend,
} from "@/registry/habi/ui/field";

const ids = [
  { value: "philsys", label: "PhilSys ID (National ID)" },
  { value: "passport", label: "Philippine passport" },
  { value: "drivers-license", label: "Driver's license" },
  { value: "umid", label: "UMID" },
];

export default function CheckboxGroupDemo() {
  return (
    <Field name="ids" className="w-full max-w-80">
      <Fieldset render={<CheckboxGroup defaultValue={["philsys"]} />}>
        <FieldsetLegend>Which IDs can you bring?</FieldsetLegend>
        <FieldDescription>Select all that apply.</FieldDescription>
        {ids.map((id) => (
          <FieldItem key={id.value}>
            <ChoiceLabel>
              <Checkbox value={id.value} />
              {id.label}
            </ChoiceLabel>
          </FieldItem>
        ))}
      </Fieldset>
    </Field>
  );
}
