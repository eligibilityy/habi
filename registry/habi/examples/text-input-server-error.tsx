import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/habi/ui/field";
import { Input } from "@/registry/habi/ui/input";

export default function TextInputServerError() {
  return (
    <Field invalid className="w-full max-w-80">
      <FieldLabel>PhilSys Card Number (PCN)</FieldLabel>
      <Input
        placeholder="0000-0000-0000-0000"
        defaultValue="1234-5678-9012-3456"
        inputMode="numeric"
      />
      <FieldDescription>
        16 digits, printed on the front of your card.
      </FieldDescription>
      <FieldError match>
        We couldn&apos;t find this number. Check it against your card.
      </FieldError>
    </Field>
  );
}
