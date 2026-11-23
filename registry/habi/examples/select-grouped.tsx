import { Fragment } from "react";

import { Field } from "@/registry/habi/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectGroupLabel,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/registry/habi/ui/select";

const islandGroups = [
  {
    label: "Luzon",
    regions: [
      { value: "ncr", label: "National Capital Region (NCR)" },
      { value: "car", label: "Cordillera Administrative Region (CAR)" },
      { value: "r1", label: "Ilocos Region (Region I)" },
      { value: "r2", label: "Cagayan Valley (Region II)" },
      { value: "r3", label: "Central Luzon (Region III)" },
      { value: "r4a", label: "CALABARZON (Region IV-A)" },
      { value: "mimaropa", label: "MIMAROPA Region" },
      { value: "r5", label: "Bicol Region (Region V)" },
    ],
  },
  {
    label: "Visayas",
    regions: [
      { value: "r6", label: "Western Visayas (Region VI)" },
      { value: "nir", label: "Negros Island Region (NIR)" },
      { value: "r7", label: "Central Visayas (Region VII)" },
      { value: "r8", label: "Eastern Visayas (Region VIII)" },
    ],
  },
  {
    label: "Mindanao",
    regions: [
      { value: "r9", label: "Zamboanga Peninsula (Region IX)" },
      { value: "r10", label: "Northern Mindanao (Region X)" },
      { value: "r11", label: "Davao Region (Region XI)" },
      { value: "r12", label: "SOCCSKSARGEN (Region XII)" },
      { value: "r13", label: "Caraga (Region XIII)" },
      { value: "barmm", label: "Bangsamoro (BARMM)" },
    ],
  },
];

const regions = islandGroups.flatMap((group) => group.regions);

export default function SelectGrouped() {
  return (
    <Field className="w-full max-w-80">
      <SelectLabel>Region</SelectLabel>
      <Select items={regions}>
        <SelectTrigger>
          <SelectValue placeholder="Select a region" />
        </SelectTrigger>
        <SelectContent>
          {islandGroups.map((group, index) => (
            <Fragment key={group.label}>
              {index > 0 && <SelectSeparator />}
              <SelectGroup>
                <SelectGroupLabel>{group.label}</SelectGroupLabel>
                {group.regions.map((region) => (
                  <SelectItem key={region.value} value={region.value}>
                    {region.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </Fragment>
          ))}
        </SelectContent>
      </Select>
    </Field>
  );
}
