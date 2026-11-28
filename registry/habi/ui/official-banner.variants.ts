// Official banner's classes. Every framework's Official banner uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const officialBannerVariants = cva(
  "w-full bg-background-inverse text-text-inverse",
);

export const officialBannerContainerVariants = cva(
  "mx-auto flex max-w-300 flex-col px-4 py-2 sm:items-center",
);

export const officialBannerTriggerVariants = cva(
  "group flex cursor-pointer items-center gap-2 rounded-sm text-left text-helper focus-visible:outline-2 focus-visible:outline-focus-inverse",
);

export const officialBannerDomainVariants = cva(
  "rounded-sm border border-border-subtle-01 px-1 text-label",
);

export const officialBannerStatementVariants = cva(
  "flex-1 text-balance decoration-from-font [text-underline-position:from-font] group-hover:underline",
);

export const officialBannerTriggerIconVariants = cva(
  "size-5 shrink-0 group-data-panel-open:rotate-180 motion-safe:transition-transform motion-safe:duration-(--duration-fast) motion-safe:ease-out",
);

export const officialBannerPanelVariants = cva(
  "h-(--collapsible-panel-height) w-full overflow-hidden data-ending-style:h-0 data-starting-style:h-0 motion-safe:transition-[height] motion-safe:duration-(--duration-short) motion-safe:ease-out",
);

export const officialBannerReasonsVariants = cva(
  "grid gap-4 pt-5 pb-4 sm:grid-cols-3 sm:gap-8 sm:pt-6 sm:pb-6",
);

export const officialBannerReasonVariants = cva("flex flex-col gap-1");

export const officialBannerReasonTitleVariants = cva("text-label");

export const officialBannerReasonDescriptionVariants = cva(
  "text-helper text-balance",
);
