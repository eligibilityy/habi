// Field's classes. Every framework's Field uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const fieldVariants = cva("flex flex-col gap-2");

export const fieldLabelVariants = cva(
  "text-label text-text-primary data-disabled:text-text-disabled",
);

export const fieldRequiredVariants = cva(
  "ms-1 text-text-error in-data-disabled:text-text-disabled",
);

export const fieldDescriptionVariants = cva(
  "text-helper text-text-helper data-disabled:text-text-disabled",
);

export const fieldErrorVariants = cva(
  "flex items-start gap-2 text-helper text-text-error",
);

export const fieldItemVariants = cva("flex flex-col");

export const choiceLabelVariants = cva([
  "flex w-fit cursor-pointer items-start gap-3 py-3 text-body-md text-text-primary",
  "has-data-disabled:cursor-not-allowed has-data-disabled:text-text-disabled data-disabled:cursor-not-allowed data-disabled:text-text-disabled",
]);

export const fieldsetVariants = cva("flex flex-col");

export const fieldsetLegendVariants = cva(
  "text-label text-text-primary data-disabled:text-text-disabled",
);
