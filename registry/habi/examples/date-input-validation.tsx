"use client";

import { useState, type FormEvent } from "react";
import { flushSync } from "react-dom";
import { Form } from "@base-ui/react/form";

import { Button } from "@/registry/habi/ui/button";
import {
  DateInput,
  type DateInputValue,
  type DatePart,
} from "@/registry/habi/ui/date-input";
import { Notification } from "@/registry/habi/ui/notification";

const parts: DatePart[] = ["day", "month", "year"];

type DateProblem = { error: string; invalid: DatePart[] };

function checkDateOfBirth(value: DateInputValue): DateProblem | null {
  const missing = parts.filter((part) => value[part].trim() === "");
  if (missing.length === parts.length) {
    return { error: "Enter your date of birth.", invalid: parts };
  }
  if (missing.length > 0) {
    return {
      error: `Date of birth must include a ${missing.join(" and ")}.`,
      invalid: missing,
    };
  }

  if (!/^\d{4}$/.test(value.year.trim())) {
    return { error: "Year must include 4 numbers.", invalid: ["year"] };
  }

  const day = Number(value.day);
  const month = Number(value.month);
  const year = Number(value.year);
  const date = new Date(year, month - 1, day);
  if (
    !Number.isInteger(day) ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return { error: "Date of birth must be a real date.", invalid: ["day"] };
  }

  if (date > new Date()) {
    return { error: "Date of birth must be in the past.", invalid: parts };
  }

  return null;
}

export default function DateInputValidation() {
  const [value, setValue] = useState<DateInputValue>({
    day: "",
    month: "",
    year: "",
  });
  const [problem, setProblem] = useState<DateProblem | null>(null);
  const [saved, setSaved] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const result = checkDateOfBirth(value);

    // Render the error first so the first invalid box can take focus.
    flushSync(() => {
      setProblem(result);
      setSaved(result === null);
    });
    form.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
  }

  return (
    <Form
      className="flex w-full max-w-84 flex-col gap-6"
      onSubmit={handleSubmit}
    >
      <p className="text-body-sm text-text-secondary">* means required</p>
      <DateInput
        label="Date of birth"
        description="For example, 15 March 1990"
        name="dob"
        autoComplete="bday"
        required
        value={value}
        onValueChange={(next) => {
          setValue(next);
          // Base UI's Form won't submit while a box is invalid, so clear the
          // error as soon as people change the date.
          setProblem(null);
          setSaved(false);
        }}
        error={problem?.error}
        invalid={problem?.invalid}
      />
      <Button type="submit" className="self-start">
        Continue
      </Button>
      {saved && <Notification kind="success" title="Date of birth saved" />}
    </Form>
  );
}
