import { Field, FieldLabel } from "@/registry/habi/ui/field";
import { Link } from "@/registry/habi/ui/link";
import { OtpInput } from "@/registry/habi/ui/otp-input";

export default function OtpInputMpin() {
  return (
    <div className="flex w-full max-w-84 flex-col gap-2">
      <Field name="mpin">
        <FieldLabel>Enter your 6-digit MPIN</FieldLabel>
        <OtpInput mask autoComplete="off" />
      </Field>
      <Link standalone size="small" href="/docs/components/otp-input">
        Forgot your MPIN?
      </Link>
    </div>
  );
}
