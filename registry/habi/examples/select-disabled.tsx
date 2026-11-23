import { Field, FieldDescription } from "@/registry/habi/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/habi/ui/select";

const regions = [{ value: "r7", label: "Central Visayas (Region VII)" }];

export default function SelectDisabled() {
  return (
    <Field disabled className="w-full max-w-80">
      <SelectLabel>Region</SelectLabel>
      <Select items={regions} defaultValue="r7">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {regions.map((region) => (
            <SelectItem key={region.value} value={region.value}>
              {region.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FieldDescription>
        Taken from your PhilSys record. To change it, contact PSA.
      </FieldDescription>
    </Field>
  );
}
