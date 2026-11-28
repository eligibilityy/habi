// Card's classes. Every framework's Card uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "group/card flex flex-col overflow-hidden rounded-card border border-border-subtle-01 bg-layer-01 text-text-primary shadow-card",
  {
    variants: {
      layout: {
        vertical: "",
        horizontal: "sm:flex-row",
      },
    },
    defaultVariants: {
      layout: "vertical",
    },
  },
);

export const cardImageVariants = cva([
  "relative h-50 w-full shrink-0 overflow-hidden bg-layer-accent-01 [&_img]:size-full [&_img]:object-cover",
  "sm:group-data-[layout=horizontal]/card:h-auto sm:group-data-[layout=horizontal]/card:min-h-50 sm:group-data-[layout=horizontal]/card:w-60",
]);

export const cardIconVariants = cva([
  "mx-6 mt-6 flex size-12 shrink-0 items-center justify-center rounded-md bg-highlight-default text-icon-interactive [&_svg]:size-6",
  "sm:group-data-[layout=horizontal]/card:mr-0",
]);

export const cardBodyVariants = cva("flex min-w-0 flex-1 flex-col gap-6 p-6");

export const cardHeaderVariants = cva("flex flex-col gap-2");

export const cardBadgesVariants = cva("flex flex-wrap gap-2");

export const cardEyebrowVariants = cva("text-label text-text-secondary");

export const cardTitleVariants = cva("text-heading-sm text-text-primary");

export const cardDescriptionVariants = cva("text-body-md text-text-secondary");

export const cardMetaVariants = cva(
  "flex flex-wrap gap-x-4 gap-y-2 text-body-sm text-text-secondary",
);

export const cardMetaItemVariants = cva(
  "inline-flex items-center gap-2 [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:text-icon-secondary",
);

export const cardActionsVariants = cva(
  "flex flex-wrap items-center gap-x-6 gap-y-4",
);
