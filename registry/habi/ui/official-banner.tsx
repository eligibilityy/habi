import type { ComponentProps, ReactNode } from "react";
import { Collapsible } from "@base-ui/react/collapsible";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";

type Reason = { title: ReactNode; description: ReactNode };

const defaultReasons: Reason[] = [
  {
    title: "Official websites use .gov.ph",
    description:
      "Government websites end in .gov.ph. Watch out for addresses that only look similar.",
  },
  {
    title: "Check that the address starts with https://",
    description: "https:// means you're safely connected to this website.",
  },
  {
    title: "Protect your OTP and PIN",
    description:
      "Never share them with anyone who texts, calls or messages you.",
  },
];

type OfficialBannerProps = Omit<
  ComponentProps<typeof Collapsible.Root>,
  "className" | "render"
> & {
  className?: string;
  /** The words on the button. Change them only to translate them. */
  statement?: ReactNode;
  /** The three ways to check the site, shown when the banner is open. */
  reasons?: Reason[];
  /** Names the banner's landmark for screen readers. */
  "aria-label"?: string;
};

function OfficialBanner({
  className,
  statement = "Official PH Government website",
  reasons = defaultReasons,
  "aria-label": ariaLabel = "Official government website",
  ...props
}: OfficialBannerProps) {
  return (
    <Collapsible.Root
      data-slot="official-banner"
      render={<section aria-label={ariaLabel} />}
      className={cn(
        "w-full bg-background-inverse text-text-inverse",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-300 flex-col px-4 py-2 sm:items-center">
        <Collapsible.Trigger
          data-slot="official-banner-trigger"
          className="group flex cursor-pointer items-center gap-2 rounded-sm text-left text-helper focus-visible:outline-2 focus-visible:outline-focus-inverse"
        >
          <span className="rounded-sm border border-border-subtle-01 px-1 text-label">
            .gov.ph
          </span>
          <span className="flex-1 text-balance decoration-from-font [text-underline-position:from-font] group-hover:underline">
            {statement}
          </span>
          <ChevronDownIcon
            aria-hidden
            className="size-5 shrink-0 group-data-panel-open:rotate-180 motion-safe:transition-transform motion-safe:duration-(--duration-fast) motion-safe:ease-out"
          />
        </Collapsible.Trigger>
        <Collapsible.Panel
          data-slot="official-banner-panel"
          className="h-(--collapsible-panel-height) w-full overflow-hidden data-ending-style:h-0 data-starting-style:h-0 motion-safe:transition-[height] motion-safe:duration-(--duration-short) motion-safe:ease-out"
        >
          <ul className="grid gap-4 pt-5 pb-4 sm:grid-cols-3 sm:gap-8 sm:pt-6 sm:pb-6">
            {reasons.map((reason, index) => (
              <li key={index} className="flex flex-col gap-1">
                <span className="text-label">{reason.title}</span>
                <span className="text-helper text-balance">
                  {reason.description}
                </span>
              </li>
            ))}
          </ul>
        </Collapsible.Panel>
      </div>
    </Collapsible.Root>
  );
}

export { OfficialBanner, type OfficialBannerProps };
