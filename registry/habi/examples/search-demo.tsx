"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

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

type Service = { id: string; title: string; description: string };

const services: Service[] = [
  {
    id: "nbi",
    title: "NBI clearance",
    description: "Apply for or renew your clearance",
  },
  {
    id: "nbi-status",
    title: "Check NBI clearance status",
    description: "Use your reference number",
  },
  {
    id: "nbi-appointment",
    title: "NBI clearance appointment",
    description: "Change your date or branch",
  },
  {
    id: "passport",
    title: "Passport appointment",
    description: "Book a DFA appointment for a new or renewed passport",
  },
  {
    id: "police",
    title: "Police clearance",
    description: "Apply online and pick a police station",
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
    id: "philhealth",
    title: "PhilHealth contributions",
    description: "Check what you've paid",
  },
  {
    id: "sss-loan",
    title: "SSS salary loan",
    description: "Apply with your My.SSS account",
  },
  {
    id: "pagibig",
    title: "Pag-IBIG MP2 savings",
    description: "Open an account or check your savings",
  },
  {
    id: "tin",
    title: "Taxpayer Identification Number (TIN)",
    description: "Get a TIN from the BIR",
  },
];

export default function SearchDemo() {
  return (
    <Search items={services} itemToStringValue={(service) => service.title}>
      <SearchInput
        aria-label="Search for a service"
        placeholder="Search for a service"
        shortcut
        className="max-w-100"
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
  );
}
