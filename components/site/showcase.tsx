"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { Button } from "@/registry/habi/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/registry/habi/ui/field";
import { Notification } from "@/registry/habi/ui/notification";
import { OtpInput } from "@/registry/habi/ui/otp-input";
import {
  Search,
  SearchContent,
  SearchEmpty,
  SearchInput,
  SearchItem,
  SearchItemDescription,
  SearchItemText,
  SearchList,
} from "@/registry/habi/ui/search";
import { Tag, TagGroup } from "@/registry/habi/ui/tag";

type Service = { id: string; title: string; description: string };

const services: Service[] = [
  {
    id: "nbi",
    title: "NBI clearance",
    description: "Apply for or renew your clearance",
  },
  {
    id: "passport",
    title: "Passport appointment",
    description: "Book a DFA appointment",
  },
  {
    id: "philsys",
    title: "National ID registration",
    description: "Register for PhilSys or check your status",
  },
  {
    id: "license",
    title: "Driver's license renewal",
    description: "Renew your LTO license online",
  },
  {
    id: "tin",
    title: "Taxpayer Identification Number (TIN)",
    description: "Get a TIN from the BIR",
  },
];

export function SearchPreview() {
  return (
    <div className="flex flex-col gap-4">
      <Search items={services} itemToStringValue={(service) => service.title}>
        <SearchInput
          aria-label="Search for a service"
          placeholder="Search for a service"
        />
        <SearchContent>
          <SearchEmpty>No services match your search.</SearchEmpty>
          <SearchList>
            {(service: Service) => (
              <SearchItem key={service.id} value={service}>
                <MagnifyingGlassIcon />
                <SearchItemText>
                  {service.title}
                  <SearchItemDescription>
                    {service.description}
                  </SearchItemDescription>
                </SearchItemText>
              </SearchItem>
            )}
          </SearchList>
        </SearchContent>
      </Search>
      <TagGroup multiple defaultValue={["ids"]} aria-label="Filter services">
        <Tag value="passport">Passport</Tag>
        <Tag value="ids">IDs</Tag>
        <Tag value="taxes">Taxes</Tag>
        <Tag value="health">Health</Tag>
      </TagGroup>
    </div>
  );
}

export function FormPreview() {
  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => event.preventDefault()}
    >
      <Field name="code">
        <FieldLabel>Enter the 6-digit code</FieldLabel>
        <FieldDescription>
          We sent it by SMS to +63 917 *** 4567.
        </FieldDescription>
        <OtpInput />
      </Field>
      <Button type="submit" className="self-start">
        Continue
      </Button>
    </form>
  );
}

export function ConfirmationPreview() {
  return (
    <Notification kind="success" title="Appointment booked">
      15 December 2026 at 9:00 AM, DFA Aseana. Your reference number is{" "}
      <span className="font-mono">DFA-2026-1215-0417</span>.
    </Notification>
  );
}
