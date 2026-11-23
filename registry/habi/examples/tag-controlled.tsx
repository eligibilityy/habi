"use client";

import { useState } from "react";

import { Tag, TagGroup } from "@/registry/habi/ui/tag";

const services = [
  { value: "passport", label: "Passport" },
  { value: "ids", label: "IDs" },
  { value: "taxes", label: "Taxes" },
  { value: "health", label: "Health" },
];

export default function TagControlled() {
  const [selected, setSelected] = useState<string[]>(["ids"]);

  return (
    <div className="flex flex-col items-center gap-4">
      <TagGroup
        multiple
        value={selected}
        onValueChange={setSelected}
        aria-label="Filter services"
      >
        {services.map((service) => (
          <Tag key={service.value} value={service.value}>
            {service.label}
          </Tag>
        ))}
      </TagGroup>
      <p className="text-body-sm text-text-secondary" aria-live="polite">
        {selected.length === 0
          ? "Showing all services"
          : `Showing ${selected.length} of ${services.length} services`}
      </p>
    </div>
  );
}
