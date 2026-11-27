"use client";

import type { ReactNode } from "react";
import { MapPinIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import { Badge } from "@/registry/habi/ui/badge";
import { Button } from "@/registry/habi/ui/button";
import {
  ChoiceLabel,
  Field,
  FieldDescription,
  FieldItem,
  FieldLabel,
  Fieldset,
  FieldsetLegend,
} from "@/registry/habi/ui/field";
import { FileInput } from "@/registry/habi/ui/file-input";
import { Notification } from "@/registry/habi/ui/notification";
import { OtpInput } from "@/registry/habi/ui/otp-input";
import { Radio, RadioGroup } from "@/registry/habi/ui/radio";
import { Search, SearchInput } from "@/registry/habi/ui/search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/habi/ui/select";
import { StatusIcon } from "@/registry/habi/ui/status-icon";
import { Tag, TagGroup } from "@/registry/habi/ui/tag";

function Panel({
  title,
  children,
  className,
}: {
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 rounded-card border border-border-subtle-01 bg-layer-01 p-6",
        className,
      )}
    >
      {title && <p className="text-heading-xs text-text-primary">{title}</p>}
      {children}
    </div>
  );
}

const sites = [
  { value: "aseana", label: "DFA Aseana, Parañaque" },
  { value: "cebu", label: "DFA Cebu" },
  { value: "davao", label: "DFA Davao" },
];

function AppointmentPanel() {
  return (
    <Panel title="Book a passport appointment">
      <Field>
        <SelectLabel>Consular office</SelectLabel>
        <Select items={sites} defaultValue="aseana">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sites.map((site) => (
              <SelectItem key={site.value} value={site.value}>
                {site.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field name="time">
        <Fieldset render={<RadioGroup defaultValue="0900" />}>
          <FieldsetLegend>Tuesday, 15 December</FieldsetLegend>
          {[
            ["0900", "9:00 AM", "4 slots left"],
            ["1030", "10:30 AM", "1 slot left"],
            ["1300", "1:00 PM", "6 slots left"],
          ].map(([value, time, hint]) => (
            <FieldItem key={value}>
              <ChoiceLabel>
                <Radio value={value} />
                <span className="flex flex-col">
                  {time}
                  <span className="text-body-sm text-text-secondary">
                    {hint}
                  </span>
                </span>
              </ChoiceLabel>
            </FieldItem>
          ))}
        </Fieldset>
      </Field>
      <Button className="self-start">Book appointment</Button>
    </Panel>
  );
}

const steps: {
  label: string;
  detail: string;
  state: "done" | "current" | "next";
}[] = [
  { label: "Application submitted", detail: "12 December", state: "done" },
  { label: "Payment received", detail: "12 December", state: "done" },
  { label: "Biometrics", detail: "15 December, 9:00 AM", state: "current" },
  {
    label: "Ready to collect",
    detail: "In about 5 working days",
    state: "next",
  },
];

function StatusPanel() {
  return (
    <Panel>
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-body-sm text-text-secondary">NBI clearance</p>
          <p className="text-heading-xs text-text-primary">
            Application status
          </p>
        </div>
        <Badge kind="info">In progress</Badge>
      </div>
      <p className="flex flex-col gap-1 rounded-control bg-layer-accent-01 px-4 py-3">
        <span className="text-body-sm text-text-secondary">
          Reference number
        </span>
        <span className="text-mono-sm text-text-primary">
          NBI-2026-1215-0417
        </span>
      </p>
      <ol className="flex flex-col gap-4">
        {steps.map((step) => (
          <li key={step.label} className="flex items-start gap-3">
            {step.state === "done" ? (
              <StatusIcon kind="success" className="mt-0.5" />
            ) : (
              <span
                className={cn(
                  "mt-0.5 size-5 shrink-0 rounded-full border-2",
                  step.state === "current"
                    ? "border-interactive-default"
                    : "border-border-subtle-01",
                )}
              />
            )}
            <span className="flex flex-col">
              <span
                className={cn(
                  "text-body-md",
                  step.state === "current"
                    ? "font-semibold text-text-primary"
                    : step.state === "next"
                      ? "text-text-secondary"
                      : "text-text-primary",
                )}
              >
                {step.label}
              </span>
              <span className="text-body-sm text-text-secondary">
                {step.detail}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </Panel>
  );
}

function PaymentPanel() {
  return (
    <Panel title="Pay your fee">
      <Field name="method">
        <Fieldset render={<RadioGroup defaultValue="gcash" />}>
          <FieldsetLegend className="sr-only">Payment method</FieldsetLegend>
          {[
            ["gcash", "GCash"],
            ["maya", "Maya"],
            ["card", "Credit or debit card"],
          ].map(([value, label]) => (
            <FieldItem key={value}>
              <ChoiceLabel>
                <Radio value={value} />
                {label}
              </ChoiceLabel>
            </FieldItem>
          ))}
        </Fieldset>
      </Field>
      <dl className="flex flex-col gap-2 border-t border-border-subtle-01 pt-4 text-body-sm">
        <div className="flex justify-between text-text-secondary">
          <dt>Passport fee</dt>
          <dd>₱950.00</dd>
        </div>
        <div className="flex justify-between text-text-secondary">
          <dt>Convenience fee</dt>
          <dd>₱0.00</dd>
        </div>
        <div className="flex justify-between text-label text-text-primary">
          <dt>Total</dt>
          <dd>₱950.00</dd>
        </div>
      </dl>
      <Button>Pay ₱950.00</Button>
    </Panel>
  );
}

function SearchPanel() {
  return (
    <Panel>
      <Search items={[]}>
        <SearchInput
          aria-label="Search for a service"
          placeholder="Search for a service"
        />
      </Search>
      <TagGroup multiple defaultValue={["ids"]} aria-label="Filter services">
        <Tag value="ids">IDs</Tag>
        <Tag value="passport">Passport</Tag>
        <Tag value="taxes">Taxes</Tag>
        <Tag value="health">Health</Tag>
      </TagGroup>
      <ul className="flex flex-col divide-y divide-border-subtle-01">
        {[
          ["National ID registration", "PSA · About 30 minutes"],
          ["Driver's license renewal", "LTO · Online"],
          ["Postal ID", "PHLPost · In person"],
        ].map(([title, meta]) => (
          <li key={title} className="flex flex-col gap-0.5 py-3 first:pt-0">
            <span className="text-body-md text-link-primary">{title}</span>
            <span className="flex items-center gap-1 text-body-sm text-text-secondary">
              <MapPinIcon className="size-4 text-icon-secondary" />
              {meta}
            </span>
          </li>
        ))}
      </ul>
    </Panel>
  );
}

function MpinPanel() {
  return (
    <Panel>
      <Field name="mpin">
        <FieldLabel>Enter your MPIN</FieldLabel>
        <FieldDescription>The 4-digit PIN you use to log in.</FieldDescription>
        <OtpInput length={4} mask defaultValue="48" />
      </Field>
      <Button kind="tertiary" className="self-start">
        Log in
      </Button>
    </Panel>
  );
}

function UploadPanel() {
  return (
    <Panel>
      <Field>
        <FieldLabel>Photo of your valid ID</FieldLabel>
        <FieldDescription>JPG, PNG or PDF, up to 5 MB.</FieldDescription>
        <FileInput
          file={{ name: "philsys-id.jpg", size: 1_240_000 }}
          progress={60}
        />
      </Field>
    </Panel>
  );
}

/**
 * The home page hero: real Habi components arranged as pieces of a service,
 * cropped and faded at the bottom. It's a picture, not something to use, so
 * it's inert: no Tab stops before the page's content, and screen readers
 * hear one description.
 */
export function HeroShowcase() {
  return (
    <div
      role="img"
      aria-label="Habi components in a government service: booking a passport appointment, an application status with a reference number, a payment, a service search with filter tags, an MPIN and an ID upload."
      className="relative h-[34rem] w-full max-w-6xl overflow-hidden mask-b-from-75% sm:h-[38rem] sm:mask-b-from-60%"
    >
      <div
        inert
        className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        <div className="flex flex-col gap-4">
          <AppointmentPanel />
          <Notification kind="success" title="Payment received">
            We sent the receipt to juan.delacruz@email.com.
          </Notification>
        </div>
        <div className="hidden flex-col gap-4 md:flex">
          <StatusPanel />
          <PaymentPanel />
        </div>
        <div className="hidden flex-col gap-4 lg:flex">
          <SearchPanel />
          <MpinPanel />
          <UploadPanel />
        </div>
      </div>
    </div>
  );
}
