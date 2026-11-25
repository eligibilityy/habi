import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/habi/ui/field";
import { Input } from "@/registry/habi/ui/input";

export default function FieldDemo() {
  return (
    <Field className="w-full max-w-80">
      <FieldLabel required>Mobile number</FieldLabel>
      <Input
        type="tel"
        autoComplete="tel-national"
        placeholder="917 123 4567"
        required
      />
      <FieldDescription>
        We&apos;ll send your reference number to this number by SMS.
      </FieldDescription>
      <FieldError match="valueMissing">Enter your mobile number.</FieldError>
    </Field>
  );
}
