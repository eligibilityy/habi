import { Field, FieldDescription, FieldLabel } from "@/registry/habi/ui/field";
import { Input } from "@/registry/habi/ui/input";

export default function TextInputDemo() {
  return (
    <Field className="w-full max-w-80">
      <FieldLabel>Given name</FieldLabel>
      <Input placeholder="e.g. Juan" autoComplete="given-name" />
      <FieldDescription>
        Write it as it appears on your birth certificate.
      </FieldDescription>
    </Field>
  );
}
