"use client";

import { useId, useState, type ReactNode } from "react";

import { cn } from "@/registry/habi/lib/utils";
import {
  dateInputDayVariants,
  dateInputDescriptionVariants,
  dateInputErrorVariants,
  dateInputMonthListVariants,
  dateInputMonthVariants,
  dateInputPartLabelVariants,
  dateInputPartVariants,
  dateInputPartsVariants,
  dateInputVariants,
  dateInputYearVariants,
} from "@/registry/habi/ui/date-input.variants";
import {
  Field,
  FieldLabel,
  Fieldset,
  FieldsetLegend,
} from "@/registry/habi/ui/field";
import { Input } from "@/registry/habi/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/habi/ui/select";
import { StatusIcon } from "@/registry/habi/ui/status-icon";

type DatePart = "day" | "month" | "year";
type DateInputValue = Record<DatePart, string>;

const emptyDate: DateInputValue = { day: "", month: "", year: "" };

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
].map((label, index) => ({ value: String(index + 1), label }));

type DateInputProps = {
  label: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  invalid?: boolean | DatePart[];
  value?: DateInputValue;
  defaultValue?: DateInputValue;
  onValueChange?: (value: DateInputValue) => void;
  name?: string;
  autoComplete?: "bday";
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

function DateInput({
  label,
  description,
  error,
  invalid = Boolean(error),
  value,
  defaultValue = emptyDate,
  onValueChange,
  name,
  autoComplete,
  required,
  disabled,
  className,
}: DateInputProps) {
  const id = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const current = value ?? internalValue;

  function update(part: DatePart, partValue: string) {
    const next = { ...current, [part]: partValue };
    if (value === undefined) setInternalValue(next);
    onValueChange?.(next);
  }

  const isInvalid = (part: DatePart) =>
    Array.isArray(invalid) ? invalid.includes(part) : invalid;
  const partName = (part: DatePart) => (name ? `${name}-${part}` : undefined);
  const partAutoComplete = (part: DatePart) =>
    autoComplete ? `${autoComplete}-${part}` : undefined;

  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <Fieldset
      disabled={disabled}
      aria-describedby={
        [descriptionId, errorId].filter(Boolean).join(" ") || undefined
      }
      className={cn(dateInputVariants(), className)}
    >
      <FieldsetLegend required={required}>{label}</FieldsetLegend>
      {description && (
        <p id={descriptionId} className={dateInputDescriptionVariants()}>
          {description}
        </p>
      )}
      <div className={dateInputPartsVariants()}>
        <Field
          name={partName("day")}
          invalid={isInvalid("day")}
          className={dateInputPartVariants()}
        >
          <FieldLabel className={dateInputPartLabelVariants()}>Day</FieldLabel>
          <Input
            value={current.day}
            onValueChange={(day) => update("day", day)}
            inputMode="numeric"
            autoComplete={partAutoComplete("day")}
            placeholder="DD"
            className={dateInputDayVariants()}
          />
        </Field>
        <Field
          name={partName("month")}
          invalid={isInvalid("month")}
          className={dateInputPartVariants()}
        >
          <SelectLabel className={dateInputPartLabelVariants()}>
            Month
          </SelectLabel>
          <Select
            items={months}
            value={current.month || null}
            onValueChange={(month) => update("month", month ?? "")}
            autoComplete={partAutoComplete("month")}
          >
            <SelectTrigger className={dateInputMonthVariants()}>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className={dateInputMonthListVariants()}>
              {months.map((month) => (
                <SelectItem key={month.value} value={month.value}>
                  {month.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>
        <Field
          name={partName("year")}
          invalid={isInvalid("year")}
          className={dateInputPartVariants()}
        >
          <FieldLabel className={dateInputPartLabelVariants()}>Year</FieldLabel>
          <Input
            value={current.year}
            onValueChange={(year) => update("year", year)}
            inputMode="numeric"
            autoComplete={partAutoComplete("year")}
            placeholder="YYYY"
            className={dateInputYearVariants()}
          />
        </Field>
      </div>
      {error && (
        <div id={errorId} className={dateInputErrorVariants()}>
          <StatusIcon kind="error" />
          <span>{error}</span>
        </div>
      )}
    </Fieldset>
  );
}

export { DateInput, type DateInputProps, type DateInputValue, type DatePart };
