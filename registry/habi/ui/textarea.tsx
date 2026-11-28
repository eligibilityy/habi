"use client";

import { useEffect, useState, type ComponentProps } from "react";
import { Field as BaseField } from "@base-ui/react/field";
import { Input as BaseInput } from "@base-ui/react/input";

import { cn } from "@/registry/habi/lib/utils";
import { StatusIcon } from "@/registry/habi/ui/status-icon";
import {
  textareaCharacterCountVariants,
  textareaCountIconVariants,
  textareaCountTextVariants,
  textareaCountTriggerVariants,
  textareaScreenReaderTextVariants,
  textareaVariants,
} from "@/registry/habi/ui/textarea.variants";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/habi/ui/tooltip";

type TextareaProps = Omit<
  ComponentProps<typeof BaseInput>,
  "className" | "render" | "type"
> &
  Pick<ComponentProps<"textarea">, "rows" | "cols" | "wrap"> & {
    className?: string;
    /** Marks the textarea once the answer is longer than this. It doesn't stop people typing. */
    characterLimit?: number;
  };

function Textarea({
  className,
  characterLimit,
  rows,
  cols,
  wrap,
  value,
  defaultValue,
  onValueChange,
  ...props
}: TextareaProps) {
  // Track the length ourselves when uncontrolled, so the limit still works.
  const [uncontrolledLength, setUncontrolledLength] = useState(
    () => String(defaultValue ?? "").length,
  );
  const length =
    value !== undefined ? String(value).length : uncontrolledLength;
  const overLimit = characterLimit !== undefined && length > characterLimit;

  return (
    <BaseInput
      data-slot="textarea"
      data-over-limit={overLimit ? "" : undefined}
      render={<textarea rows={rows} cols={cols} wrap={wrap} />}
      className={cn(textareaVariants(), className)}
      value={value}
      defaultValue={defaultValue}
      onValueChange={(nextValue, eventDetails) => {
        setUncontrolledLength(nextValue.length);
        onValueChange?.(nextValue, eventDetails);
      }}
      {...props}
    />
  );
}

type TextareaCharacterCountProps = {
  /** The textarea's current value. */
  value: string;
  /** The number of characters people can enter. */
  limit: number;
  /** Shown in a tooltip when people point at the count over the limit, e.g. "Your reason is too long". */
  overLimitMessage?: string;
  /** How long to wait after the last change before screen readers read the count, in milliseconds. */
  announceDelay?: number;
  className?: string;
};

function TextareaCharacterCount({
  value,
  limit,
  overLimitMessage,
  announceDelay = 1000,
  className,
}: TextareaCharacterCountProps) {
  const remaining = limit - value.length;
  const overLimit = remaining < 0;
  const visibleCount = `${remaining}/${limit} characters remaining`;
  const spokenCount = overLimit
    ? `You have ${-remaining} ${-remaining === 1 ? "character" : "characters"} too many`
    : `You have ${remaining} ${remaining === 1 ? "character" : "characters"} remaining`;

  // Screen readers hear the count once people pause, not on every key press.
  const [announcement, setAnnouncement] = useState(spokenCount);
  useEffect(() => {
    const timeout = setTimeout(
      () => setAnnouncement(spokenCount),
      announceDelay,
    );
    return () => clearTimeout(timeout);
  }, [spokenCount, announceDelay]);

  const count = (
    <span
      aria-hidden
      className={textareaCountTextVariants({ invalid: overLimit })}
    >
      {overLimit && (
        <StatusIcon kind="error" className={textareaCountIconVariants()} />
      )}
      <span>{visibleCount}</span>
    </span>
  );

  return (
    <div
      data-slot="textarea-character-count"
      className={cn(textareaCharacterCountVariants(), className)}
    >
      {/* Read with the label when people reach the textarea. */}
      <BaseField.Description className={textareaScreenReaderTextVariants()}>
        You can enter up to {limit} characters.
      </BaseField.Description>
      {overLimit && overLimitMessage ? (
        <Tooltip>
          <TooltipTrigger
            render={<span className={textareaCountTriggerVariants()} />}
          >
            {count}
          </TooltipTrigger>
          <TooltipContent>{overLimitMessage}</TooltipContent>
        </Tooltip>
      ) : (
        count
      )}
      <span aria-live="polite" className={textareaScreenReaderTextVariants()}>
        {announcement}
      </span>
    </div>
  );
}

export {
  Textarea,
  TextareaCharacterCount,
  type TextareaCharacterCountProps,
  type TextareaProps,
};
