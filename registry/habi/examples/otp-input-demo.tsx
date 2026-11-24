import { Field, FieldDescription, FieldLabel } from "@/registry/habi/ui/field";
import { OtpInput } from "@/registry/habi/ui/otp-input";

export default function OtpInputDemo() {
  return (
    <Field name="code" className="w-full max-w-84">
      <FieldLabel>Enter the 6-digit code</FieldLabel>
      <FieldDescription>
        We sent it by SMS to +63 917 *** 4567.
      </FieldDescription>
      <OtpInput />
    </Field>
  );
}
