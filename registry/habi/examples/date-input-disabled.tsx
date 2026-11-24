import { DateInput } from "@/registry/habi/ui/date-input";

export default function DateInputDisabled() {
  return (
    <DateInput
      label="Date of birth"
      description="Taken from your PhilSys record. To change it, contact PSA."
      defaultValue={{ day: "15", month: "3", year: "1990" }}
      disabled
    />
  );
}
