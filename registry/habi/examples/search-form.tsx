"use client";

import { useState, type FormEvent } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

import { Button } from "@/registry/habi/ui/button";
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
];

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = query.trim();
    // In a real service, send people to your results page, like /search?q=…
    setResult(
      text
        ? `Showing all results for "${text}".`
        : "Enter what you're looking for.",
    );
  }

  return (
    <div className="flex w-full max-w-120 flex-col gap-4">
      <form role="search" className="flex gap-2" onSubmit={handleSubmit}>
        <Search
          items={services}
          itemToStringValue={(service) => service.title}
          value={query}
          onValueChange={setQuery}
        >
          <SearchInput
            name="q"
            aria-label="Search for a service"
            placeholder="Search for a service"
            className="flex-1"
          />
          <SearchContent>
            <SearchEmpty>
              No matching services. Press Search to see all results.
            </SearchEmpty>
            <SearchList>
              {(service: Service) => (
                <SearchItem
                  key={service.id}
                  value={service}
                  // In a real service, go to the service's page.
                  onClick={() => setResult(`Opening ${service.title}.`)}
                >
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
        <Button type="submit">Search</Button>
      </form>
      <p role="status" className="text-body-md text-text-primary">
        {result}
      </p>
    </div>
  );
}
