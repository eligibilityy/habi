"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { CalendarIcon, ClockIcon, MapPinIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import jeepneyPhoto from "@/public/home/jeepney.jpg";
import mayonPhoto from "@/public/home/mayon.jpg";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/habi/ui/accordion";
import { Badge } from "@/registry/habi/ui/badge";
import { Button } from "@/registry/habi/ui/button";
import {
  Card,
  CardBadges,
  CardBody,
  CardDescription,
  CardHeader,
  CardImage,
  CardMeta,
  CardMetaItem,
  CardTitle,
} from "@/registry/habi/ui/card";
import { Checkbox, CheckboxGroup } from "@/registry/habi/ui/checkbox";
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
import { Link } from "@/registry/habi/ui/link";
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

function AdvisoryCard() {
  return (
    <Card className="shadow-none">
      <CardImage>
        <Image
          src={mayonPhoto}
          alt=""
          placeholder="blur"
          sizes="(min-width: 1280px) 300px, (min-width: 768px) 50vw, 100vw"
        />
      </CardImage>
      <CardBody>
        <CardHeader>
          <CardBadges>
            <Badge kind="warning">Alert level 2</Badge>
          </CardBadges>
          <CardTitle>Mayon Volcano advisory</CardTitle>
          <CardDescription>
            Stay out of the 6 km permanent danger zone. Check evacuation centres
            near you.
          </CardDescription>
        </CardHeader>
        <CardMeta>
          <CardMetaItem>
            <ClockIcon />
            Updated 8:00 AM today
          </CardMetaItem>
        </CardMeta>
      </CardBody>
    </Card>
  );
}

function FareCard() {
  return (
    <Card className="shadow-none">
      <CardImage>
        <Image
          src={jeepneyPhoto}
          alt=""
          placeholder="blur"
          sizes="(min-width: 1280px) 300px, 100vw"
        />
      </CardImage>
      <CardBody>
        <CardHeader>
          <CardBadges>
            <Badge kind="info">Updated</Badge>
          </CardBadges>
          <CardTitle>Jeepney fare guide</CardTitle>
          <CardDescription>
            ₱13 for the first 4 km. Students, seniors and PWDs get 20% off.
          </CardDescription>
        </CardHeader>
        <CardMeta>
          <CardMetaItem>
            <CalendarIcon />
            Posted 20 November
          </CardMetaItem>
        </CardMeta>
      </CardBody>
    </Card>
  );
}

function FaqPanel() {
  return (
    <Panel title="Common questions" className="gap-2 pb-2">
      <Accordion defaultValue={["documents"]} className="-mx-6 w-auto">
        <AccordionItem value="documents">
          <AccordionTrigger className="px-6">
            What do I need to bring?
          </AccordionTrigger>
          <AccordionPanel className="px-6 sm:pr-12">
            Your appointment slip, PSA birth certificate and one valid ID.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="minors">
          <AccordionTrigger className="px-6">
            Can I apply for my child?
          </AccordionTrigger>
          <AccordionPanel className="px-6 sm:pr-12">
            Yes, with their birth certificate.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="lost">
          <AccordionTrigger className="px-6">
            What if I lost my passport?
          </AccordionTrigger>
          <AccordionPanel className="px-6 sm:pr-12">
            Report it to the DFA first.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Panel>
  );
}

function IdCard() {
  return (
    <div className="flex flex-col gap-5 rounded-card bg-interactive-default p-6 text-text-on-color shadow-card">
      <div className="flex items-center justify-between text-body-sm">
        <span>Republika ng Pilipinas</span>
        <span className="text-label">PhilSys</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-text-on-color text-heading-sm text-interactive-default">
          JD
        </span>
        <span className="flex flex-col">
          <span className="text-heading-xs">Juan Dela Cruz</span>
          <span className="text-body-sm">Born 15 March 1990</span>
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-body-sm">PhilSys card number</span>
        <span className="text-mono-sm">1234-5678-9012-3456</span>
      </div>
    </div>
  );
}

function IdsPanel() {
  return (
    <Panel>
      <Field name="ids">
        <Fieldset render={<CheckboxGroup defaultValue={["philsys", "umid"]} />}>
          <FieldsetLegend>Which IDs can you bring?</FieldsetLegend>
          <FieldDescription>Select all that apply.</FieldDescription>
          {[
            ["philsys", "PhilSys ID"],
            ["passport", "Philippine passport"],
            ["license", "Driver's license"],
            ["umid", "UMID"],
          ].map(([value, label]) => (
            <FieldItem key={value}>
              <ChoiceLabel>
                <Checkbox value={value} />
                {label}
              </ChoiceLabel>
            </FieldItem>
          ))}
        </Fieldset>
      </Field>
      <Link href="#" size="small">
        Other IDs we accept
      </Link>
    </Panel>
  );
}

/**
 * The home page hero: real Habi components arranged as pieces of services,
 * cropped and faded at the bottom. It's a picture, not something to use, so
 * it's inert: no Tab stops before the page's content, and screen readers
 * hear one description.
 *
 * Photos from Unsplash (Unsplash License): /home/mayon.jpg (DA6jJw-IcJc) and
 * /home/jeepney.jpg (HCvM5CAlYFQ).
 */
export function HeroShowcase() {
  return (
    <div
      role="img"
      aria-label="Habi components in government services: booking a passport appointment, common questions, a Mayon Volcano advisory, an application status, a service search, a National ID card, an MPIN, a payment, a jeepney fare notice, a list of IDs and an ID upload."
      className="relative h-[36rem] w-full max-w-7xl overflow-hidden mask-b-from-75% sm:h-[48rem] sm:mask-b-from-70% xl:h-[56rem]"
    >
      <div
        inert
        className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <div className="flex flex-col gap-4">
          <AppointmentPanel />
          <Notification kind="success" title="Payment received">
            We sent the receipt to juan.delacruz@email.com.
          </Notification>
          <FaqPanel />
        </div>
        <div className="hidden flex-col gap-4 md:flex">
          <AdvisoryCard />
          <StatusPanel />
        </div>
        <div className="hidden flex-col gap-4 lg:flex">
          <SearchPanel />
          <IdCard />
          <MpinPanel />
        </div>
        <div className="hidden flex-col gap-4 xl:flex">
          <PaymentPanel />
          <FareCard />
          <IdsPanel />
          <UploadPanel />
        </div>
      </div>
    </div>
  );
}
