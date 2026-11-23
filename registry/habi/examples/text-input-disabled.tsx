import { Field, FieldDescription, FieldLabel } from "@/registry/habi/ui/field";
import { Input } from "@/registry/habi/ui/input";

export default function TextInputDisabled() {
  return (
    <Field disabled className="w-full max-w-80">
      <FieldLabel>Date of birth</FieldLabel>
      <Input defaultValue="15 March 1990" />
      <FieldDescription>
        Taken from your PhilSys record. To change it, contact PSA.
      </FieldDescription>
    </Field>
  );
}
