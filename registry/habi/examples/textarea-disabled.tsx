import { Field, FieldDescription, FieldLabel } from "@/registry/habi/ui/field";
import { Textarea } from "@/registry/habi/ui/textarea";

export default function TextareaDisabled() {
  return (
    <Field disabled className="w-full max-w-100">
      <FieldLabel>Why do you need a new copy?</FieldLabel>
      <Textarea defaultValue="My surname is misspelled on the copy I have. I need a corrected copy for my passport appointment next month." />
      <FieldDescription>
        You can&apos;t change your reason after you&apos;ve paid. To change it,
        cancel this request and start a new one.
      </FieldDescription>
    </Field>
  );
}
