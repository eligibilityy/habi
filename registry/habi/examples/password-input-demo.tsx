import { Field, FieldDescription, FieldLabel } from "@/registry/habi/ui/field";
import { PasswordInput } from "@/registry/habi/ui/password-input";

export default function PasswordInputDemo() {
  return (
    <Field className="w-full max-w-80">
      <FieldLabel>Password</FieldLabel>
      <PasswordInput />
      <FieldDescription>At least 8 characters.</FieldDescription>
    </Field>
  );
}
