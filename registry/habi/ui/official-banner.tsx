import type { ComponentProps, ReactNode } from "react";
import { Collapsible } from "@base-ui/react/collapsible";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import {
  officialBannerContainerVariants,
  officialBannerDomainVariants,
  officialBannerPanelVariants,
  officialBannerReasonDescriptionVariants,
  officialBannerReasonTitleVariants,
  officialBannerReasonVariants,
  officialBannerReasonsVariants,
  officialBannerStatementVariants,
  officialBannerTriggerIconVariants,
  officialBannerTriggerVariants,
  officialBannerVariants,
} from "@/registry/habi/ui/official-banner.variants";

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
      className={cn(officialBannerVariants(), className)}
      {...props}
    >
      <div className={officialBannerContainerVariants()}>
        <Collapsible.Trigger
          data-slot="official-banner-trigger"
          className={officialBannerTriggerVariants()}
        >
          <span className={officialBannerDomainVariants()}>.gov.ph</span>
          <span className={officialBannerStatementVariants()}>{statement}</span>
          <ChevronDownIcon
            aria-hidden
            className={officialBannerTriggerIconVariants()}
          />
        </Collapsible.Trigger>
        <Collapsible.Panel
          data-slot="official-banner-panel"
          className={officialBannerPanelVariants()}
        >
          <ul className={officialBannerReasonsVariants()}>
            {reasons.map((reason, index) => (
              <li key={index} className={officialBannerReasonVariants()}>
                <span className={officialBannerReasonTitleVariants()}>
                  {reason.title}
                </span>
                <span className={officialBannerReasonDescriptionVariants()}>
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
