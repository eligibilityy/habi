import { Checkbox } from "@/registry/habi/ui/checkbox";
import { ChoiceLabel, Field } from "@/registry/habi/ui/field";

export default function CheckboxDemo() {
  return (
    <Field>
      <ChoiceLabel>
        <Checkbox name="hasPhilId" />I have a PhilID
      </ChoiceLabel>
    </Field>
  );
}
