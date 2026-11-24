"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";
import { Input as BaseInput } from "@base-ui/react/input";
import { Progress } from "@base-ui/react/progress";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowUpTrayIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

import { cn } from "@/registry/habi/lib/utils";
import { buttonVariants } from "@/registry/habi/ui/button";
import { linkVariants } from "@/registry/habi/ui/link";
import { StatusIcon } from "@/registry/habi/ui/status-icon";

/** A chosen file, or one uploaded earlier that your server describes. */
type FileInputFile = { name: string; size: number };

type FileInputProps = Omit<
  ComponentProps<typeof BaseInput>,
  | "className"
  | "type"
  | "value"
  | "defaultValue"
  | "onChange"
  | "onValueChange"
  | "required"
  | "ref"
> & {
  className?: string;
  /** The chosen file. While it's set, the file row shows instead of the drop zone. */
  file?: FileInputFile | null;
  /** Upload progress from 0 to 100. Leave it out once the upload is done. */
  progress?: number;
  /** Called with the file people chose or dropped. Check its type and size here. */
  onFileSelect?: (file: File) => void;
  /** Called when people cancel the upload or remove the file. */
  onRemove?: () => void;
  /** The text above the button. */
  prompt?: string;
  /** The button's text. */
  chooseLabel?: string;
  /** Names the cancel button for screen readers. */
  cancelLabel?: string;
  /** The remove button's text. */
  removeLabel?: string;
  /** The progress text after the file size. */
  uploadingText?: (progress: number) => string;
};

const defaultUploadingText = (progress: number) => `Uploading, ${progress}%`;

function formatFileSize(bytes: number) {
  if (bytes < 1000) return `${bytes} bytes`;
  const [value, unit] = bytes < 1e6 ? [bytes / 1e3, "KB"] : [bytes / 1e6, "MB"];
  return `${value.toLocaleString("en", { maximumFractionDigits: 1 })} ${unit}`;
}

function FileInput({
  className,
  file,
  progress,
  onFileSelect,
  onRemove,
  prompt = "Drag a file here, or",
  chooseLabel = "Choose file",
  cancelLabel = "Cancel upload",
  removeLabel = "Remove",
  uploadingText = defaultUploadingText,
  disabled,
  ...props
}: FileInputProps) {
  const [dragging, setDragging] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const actionRef = useRef<HTMLButtonElement>(null);

  const hasFile = file != null;
  const uploading = hasFile && progress !== undefined;
  const hadFile = useRef(hasFile);

  // The drop zone and the file row swap places. When the one with focus
  // disappears, move focus to the other, so keyboard users aren't sent back
  // to the top of the page.
  useEffect(() => {
    if (hadFile.current === hasFile) return;
    hadFile.current = hasFile;

    const active = document.activeElement;
    const focusWasHere =
      active === null ||
      active === document.body ||
      rootRef.current?.contains(active);
    if (focusWasHere) {
      (hasFile ? actionRef.current : inputRef.current)?.focus();
    }
  }, [hasFile]);

  const status = !file
    ? ""
    : uploading
      ? `Uploading ${file.name}`
      : `${file.name} uploaded`;

  return (
    <div
      ref={rootRef}
      data-slot="file-input"
      className={cn("w-full", className)}
    >
      <div
        data-slot="file-input-zone"
        data-dragging={dragging || undefined}
        className={cn(
          "relative flex flex-col items-center gap-3 rounded-card border border-dashed border-border-strong-01 bg-background-default p-6 text-center",
          "data-dragging:border-2 data-dragging:border-interactive-default data-dragging:bg-highlight-default data-dragging:p-[23px]",
          "has-data-invalid:border-2 has-data-invalid:border-support-error has-data-invalid:p-[23px]",
          "has-disabled:border-border-disabled has-disabled:bg-layer-accent-01",
          hasFile && "hidden",
        )}
      >
        <BaseInput
          ref={inputRef}
          type="file"
          data-slot="file-input-control"
          disabled={disabled}
          className="peer absolute inset-0 size-full cursor-pointer opacity-0 file:cursor-pointer disabled:cursor-not-allowed"
          onChange={(event) => {
            const input = event.currentTarget;
            const chosen = input.files?.[0];
            // Empty the input, so choosing the same file again still works
            // after people remove it or you reject it.
            input.value = "";
            if (chosen) onFileSelect?.(chosen);
          }}
          onDragEnter={() => setDragging(true)}
          onDragLeave={() => setDragging(false)}
          onDrop={() => setDragging(false)}
          {...props}
        />
        <ArrowUpTrayIcon className="size-8 text-icon-secondary peer-disabled:text-text-disabled" />
        <p className="text-body-sm text-text-secondary peer-disabled:text-text-disabled">
          {prompt}
        </p>
        <span
          aria-hidden="true"
          className={cn(
            buttonVariants({ kind: "tertiary" }),
            "peer-hover:bg-button-tertiary-hover-bg peer-focus-visible:focus-ring",
            "peer-disabled:border-border-disabled peer-disabled:bg-transparent peer-disabled:text-text-disabled peer-disabled:shadow-none",
          )}
        >
          {chooseLabel}
        </span>
      </div>

      {file && (
        <div
          data-slot="file-input-file"
          className="flex items-center gap-3 rounded-card border border-border-subtle-01 bg-layer-01 py-3 ps-4 pe-3"
        >
          {uploading ? (
            <DocumentTextIcon className="size-6 shrink-0 text-icon-secondary" />
          ) : (
            <StatusIcon kind="success" />
          )}
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <p className="truncate text-label text-text-primary">{file.name}</p>
            <p className="text-helper text-text-helper">
              {formatFileSize(file.size)}
              {uploading && ` · ${uploadingText(progress)}`}
            </p>
            {uploading && (
              <Progress.Root value={progress} aria-label={status}>
                <Progress.Track className="h-1 overflow-hidden rounded-full bg-border-subtle-01">
                  <Progress.Indicator className="block h-full rounded-full bg-interactive-default motion-safe:transition-[width] motion-safe:duration-(--duration-fast) motion-safe:ease-out" />
                </Progress.Track>
              </Progress.Root>
            )}
          </div>
          <button
            ref={actionRef}
            type="button"
            disabled={disabled}
            onClick={onRemove}
            className={cn(
              "shrink-0 disabled:cursor-not-allowed disabled:text-text-disabled",
              uploading
                ? "-m-0.5 inline-flex size-6 items-center justify-center rounded-control text-icon-primary focus-visible:focus-ring"
                : linkVariants({ size: "small", standalone: true }),
            )}
          >
            {uploading ? (
              <>
                <XMarkIcon className="size-5" />
                <span className="sr-only">{cancelLabel}</span>
              </>
            ) : (
              <>
                {removeLabel}
                <span className="sr-only"> {file.name}</span>
              </>
            )}
          </button>
        </div>
      )}

      <span role="status" className="sr-only">
        {status}
      </span>
    </div>
  );
}

export { FileInput, formatFileSize, type FileInputFile, type FileInputProps };
