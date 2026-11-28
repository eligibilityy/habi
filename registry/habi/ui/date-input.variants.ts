// Date input's classes. Every framework's Date input uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const dateInputVariants = cva("gap-2");

export const dateInputDescriptionVariants = cva(
  "text-helper text-text-helper in-data-disabled:text-text-disabled",
);

export const dateInputPartsVariants = cva("flex flex-wrap gap-4");

export const dateInputPartVariants = cva("gap-1");

// The Day, Month and Year labels.
export const dateInputPartLabelVariants = cva(
  "text-helper text-text-secondary",
);

export const dateInputDayVariants = cva("w-16 tabular-nums");

export const dateInputMonthVariants = cva("w-38");

export const dateInputMonthListVariants = cva("w-50");

export const dateInputYearVariants = cva("w-22 tabular-nums");

export const dateInputErrorVariants = cva(
  "flex items-start gap-2 text-helper text-text-error",
);
