"use client";

import { useEffect, useState } from "react";

import { Button } from "@/registry/habi/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/registry/habi/ui/field";
import { OtpInput } from "@/registry/habi/ui/otp-input";

const RESEND_AFTER_SECONDS = 45;

export default function OtpInputResend() {
  const [secondsLeft, setSecondsLeft] = useState(RESEND_AFTER_SECONDS);

  useEffect(() => {
    if (secondsLeft === 0) return;
    const timer = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft]);

  return (
    <div className="flex w-full max-w-84 flex-col gap-2">
      <Field name="code">
        <FieldLabel>Enter the 6-digit code</FieldLabel>
        <FieldDescription>
          We sent it by SMS to +63 917 *** 4567.
        </FieldDescription>
        <OtpInput />
      </Field>
      {/* Not a live region: announcing every second would drown out everything else. */}
      {secondsLeft > 0 ? (
        <p className="text-helper text-text-secondary">
          Didn&apos;t get it? You can resend the code in 0:
          {String(secondsLeft).padStart(2, "0")}.
        </p>
      ) : (
        <Button
          kind="subtle"
          className="self-start"
          onClick={() => setSecondsLeft(RESEND_AFTER_SECONDS)}
        >
          Resend code
        </Button>
      )}
    </div>
  );
}
