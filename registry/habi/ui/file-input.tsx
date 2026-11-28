"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";
import { Input as BaseInput } from "@base-ui/react/input";
import { Progress } from "@base-ui/react/progress";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowUpTrayIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

import { cn } from "@/registry/habi/lib/utils";
import {
  fileInputActionVariants,
  fileInputButtonVariants,
  fileInputCancelIconVariants,
  fileInputControlVariants,
  fileInputFileIconVariants,
  fileInputFileInfoVariants,
  fileInputFileNameVariants,
  fileInputFileSizeVariants,
  fileInputFileVariants,
  fileInputHiddenTextVariants,
  fileInputIconVariants,
  fileInputProgressIndicatorVariants,
  fileInputProgressTrackVariants,
  fileInputPromptVariants,
  fileInputVariants,
  fileInputZoneVariants,
} from "@/registry/habi/ui/file-input.variants";
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
      className={cn(fileInputVariants(), className)}
    >
      <div
        data-slot="file-input-zone"
        data-dragging={dragging || undefined}
        className={cn(fileInputZoneVariants({ hasFile }))}
      >
        <BaseInput
          ref={inputRef}
          type="file"
          data-slot="file-input-control"
          disabled={disabled}
          className={fileInputControlVariants()}
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
        <ArrowUpTrayIcon className={fileInputIconVariants()} />
        <p className={fileInputPromptVariants()}>{prompt}</p>
        <span aria-hidden="true" className={cn(fileInputButtonVariants())}>
          {chooseLabel}
        </span>
      </div>

      {file && (
        <div data-slot="file-input-file" className={fileInputFileVariants()}>
          {uploading ? (
            <DocumentTextIcon className={fileInputFileIconVariants()} />
          ) : (
            <StatusIcon kind="success" />
          )}
          <div className={fileInputFileInfoVariants()}>
            <p className={fileInputFileNameVariants()}>{file.name}</p>
            <p className={fileInputFileSizeVariants()}>
              {formatFileSize(file.size)}
              {uploading && ` · ${uploadingText(progress)}`}
            </p>
            {uploading && (
              <Progress.Root value={progress} aria-label={status}>
                <Progress.Track className={fileInputProgressTrackVariants()}>
                  <Progress.Indicator
                    className={fileInputProgressIndicatorVariants()}
                  />
                </Progress.Track>
              </Progress.Root>
            )}
          </div>
          <button
            ref={actionRef}
            type="button"
            disabled={disabled}
            onClick={onRemove}
            className={cn(fileInputActionVariants({ uploading }))}
          >
            {uploading ? (
              <>
                <XMarkIcon className={fileInputCancelIconVariants()} />
                <span className={fileInputHiddenTextVariants()}>
                  {cancelLabel}
                </span>
              </>
            ) : (
              <>
                {removeLabel}
                <span className={fileInputHiddenTextVariants()}>
                  {" "}
                  {file.name}
                </span>
              </>
            )}
          </button>
        </div>
      )}

      <span role="status" className={fileInputHiddenTextVariants()}>
        {status}
      </span>
    </div>
  );
}

export { FileInput, formatFileSize, type FileInputFile, type FileInputProps };
