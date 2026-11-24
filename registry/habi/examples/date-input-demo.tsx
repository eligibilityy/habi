import { DateInput } from "@/registry/habi/ui/date-input";

export default function DateInputDemo() {
  return (
    <DateInput
      label="Date of birth"
      description="For example, 15 March 1990"
      name="dob"
      autoComplete="bday"
    />
  );
}
