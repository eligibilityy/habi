import Image from "next/image";
import NextLink from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import {
  BanknotesIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  HandThumbUpIcon,
  HeartIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

import { HabiMark } from "@/components/site/habi-mark";
import {
  ConfirmationPreview,
  FormPreview,
  SearchPreview,
} from "@/components/site/showcase";
import { cn } from "@/registry/habi/lib/utils";
import { Badge } from "@/registry/habi/ui/badge";
import { buttonVariants } from "@/registry/habi/ui/button";
import { Link } from "@/registry/habi/ui/link";
import heroImage from "@/public/home/components.png";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";

const figmaUrl = "https://www.figma.com/design/D3nJzUeqpGlyMpimlesib6";
const githubUrl = "https://github.com/eligibilityy/habi";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

const benefits: { icon: Icon; title: string; description: string }[] = [
  {
    icon: HandThumbUpIcon,
    title: "Easy-to-use services",
    description:
      "Calm, uncluttered pages where people find what they need and finish their task.",
  },
  {
    icon: BoltIcon,
    title: "Faster to build",
    description:
      "Ready-made components, so teams spend their time on the service, not the buttons.",
  },
  {
    icon: BanknotesIcon,
    title: "Saves public money",
    description:
      "Agencies reuse the same tested parts instead of paying to design them again.",
  },
  {
    icon: UserGroupIcon,
    title: "Accessible from the start",
    description:
      "Built to WCAG 2.2 AA, for keyboards, screen readers and zoomed-in text.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Made for phones",
    description:
      "Designed for a mobile screen first, where most people use government services.",
  },
  {
    icon: Squares2X2Icon,
    title: "Familiar across agencies",
    description:
      "The same look and behaviour everywhere, so people know what to expect.",
  },
];

const features: {
  eyebrow: string;
  title: string;
  description: string;
  preview: ReactNode;
}[] = [
  {
    eyebrow: "Easy-to-use services",
    title: "People find the service they need, and finish what they started.",
    description:
      "Habi pages ask one thing at a time, in plain words, with fees and waiting times up front. Search suggests services as people type. Try it.",
    preview: <SearchPreview />,
  },
  {
    eyebrow: "Faster to build",
    title: "Pre-built components let teams focus on the service.",
    description:
      "Form fields, search, file uploads and confirmations are ready to copy into your project. Each comes with guidance on when to use it, so teams spend their time on what makes their service different.",
    preview: <FormPreview />,
  },
  {
    eyebrow: "Accessible from the start",
    title: "Every component works with a keyboard and a screen reader.",
    description:
      "Labels, focus, errors and announcements are built in. Each component's page says what Habi handles and what's left for you to do.",
    preview: <ConfirmationPreview />,
  },
];

function SectionHeading({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
      <h2
        id={id}
        className="text-4xl leading-tight font-bold tracking-[-0.015em] text-balance text-text-primary sm:text-5xl"
      >
        {title}
      </h2>
      {children && (
        <div className="text-body-lg text-balance text-text-secondary">
          {children}
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex w-full flex-1 flex-col">
      <section className="flex flex-col items-center gap-12 px-4 pt-16 sm:px-8 sm:pt-24">
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
          <Badge kind="warning">Unofficial · Early preview</Badge>
          <h1 className="text-5xl leading-[1.05] font-bold tracking-[-0.015em] text-balance text-text-primary sm:text-7xl">
            Habi Design System
          </h1>
          <p className="text-body-lg text-balance text-text-secondary sm:text-xl/8">
            An unofficial design system for building Philippine government
            services. Habi gives teams ready-made components, a Figma library
            and plain-language guidance, so services are easier to use and
            faster to build.
          </p>
          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <NextLink href="/docs" className={buttonVariants()}>
              Get Started
            </NextLink>
            <a href={figmaUrl} className={buttonVariants({ kind: "tertiary" })}>
              Figma File
              <ArrowTopRightOnSquareIcon />
            </a>
          </div>
        </div>
        <div className="w-full max-w-5xl overflow-hidden rounded-t-card border border-b-0 border-border-subtle-01 bg-layer-01">
          <Image
            src={heroImage}
            alt="Habi components: a service search, filter tags, status badges, a date picker, time slots, radio buttons and an appointment confirmation."
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="h-auto w-full"
          />
        </div>
      </section>

      <section
        aria-labelledby="people"
        className="border-t border-border-subtle-01 bg-layer-01 px-4 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-14">
          <SectionHeading id="people" title="Designed for the people">
            <p>
              Most people use government services on a phone, often in a hurry,
              and sometimes for the first time. Habi is built around them: pages
              that ask one thing at a time, in words people use every day, and
              that work however people use the web.
            </p>
          </SectionHeading>
          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex flex-col gap-3">
                <Icon className="size-8 text-icon-primary" />
                <h3 className="text-heading-sm text-text-primary">{title}</h3>
                <p className="text-body-md text-text-secondary">
                  {description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-label="What Habi does"
        className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 py-20 sm:gap-28 sm:px-8 sm:py-28"
      >
        {features.map(({ eyebrow, title, description, preview }, index) => (
          <article
            key={eyebrow}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
          >
            <div
              className={cn(
                "flex flex-col gap-4",
                index % 2 === 1 && "md:order-last",
              )}
            >
              <p className="text-label text-text-secondary">{eyebrow}</p>
              <h2 className="text-3xl leading-tight font-bold tracking-[-0.015em] text-balance text-text-primary sm:text-4xl">
                {title}
              </h2>
              <p className="text-body-lg text-text-secondary">{description}</p>
            </div>
            <div className="min-w-0 rounded-card bg-background-default p-6 sm:p-10">
              {preview}
            </div>
          </article>
        ))}
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-xl text-center">
          <RocketLaunchIcon className="size-14 text-icon-primary" />
          <h2 className="text-4xl leading-tight font-bold tracking-[-0.015em] text-balance text-text-primary sm:text-5xl">
            Early bird gets the worm
          </h2>
          <p className="max-w-xl text-body-lg text-balance text-text-secondary">
            Habi is open source and still taking shape. Tell us what&apos;s
            missing, what&apos;s confusing or what doesn&apos;t work.
          </p>
          <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
            <a href={`${githubUrl}/issues`} className={buttonVariants()}>
              Open an issue on GitHub
            </a>
            <NextLink
              href="/docs/installation"
              className={buttonVariants({ kind: "tertiary" })}
            >
              Read the installation guide
            </NextLink>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-label text-text-primary">{title}</h2>
      <ul className="flex flex-col gap-2">
        {links.map(({ label, href }) => (
          <li key={label}>
            {href.startsWith("/") ? (
              <Link size="small" standalone render={<NextLink href={href} />}>
                {label}
              </Link>
            ) : (
              <Link size="small" standalone href={href}>
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border-subtle-01 bg-layer-01 px-4 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <p className="flex items-center gap-2 text-heading-xs text-text-primary">
              <HabiMark mono className="h-5 w-[27px]" />
              Habi Design System
            </p>
            <p className="text-body-sm text-text-secondary">
              An independent design concept. Not affiliated with or endorsed by
              the Government of the Philippines.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <FooterColumn
              title="Design system"
              links={[
                { label: "Introduction", href: "/docs" },
                { label: "Installation", href: "/docs/installation" },
                { label: "Foundations", href: "/docs/foundations/color" },
                { label: "Components", href: "/docs/components/button" },
              ]}
            />
            <FooterColumn
              title="Open source"
              links={[
                { label: "GitHub", href: githubUrl },
                { label: "Figma", href: figmaUrl },
                {
                  label: "MIT License",
                  href: `${githubUrl}/blob/main/LICENSE`,
                },
              ]}
            />
          </div>
        </div>
        <p className="border-t border-border-subtle-01 pt-6 text-body-sm text-text-secondary">
          Made with ♥ by{" "}
          <Link
            href="https://yiliya.studio"
            target="_blank"
            rel="noopener noreferer"
          >
            yiliya.studio
          </Link>
        </p>
      </div>
    </footer>
  );
}
