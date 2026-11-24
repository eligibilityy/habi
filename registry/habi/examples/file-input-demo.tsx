"use client";

import { useEffect, useRef, useState } from "react";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/registry/habi/ui/field";
import { FileInput } from "@/registry/habi/ui/file-input";
import { StatusIcon } from "@/registry/habi/ui/status-icon";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "application/pdf"];
const MAX_SIZE = 5_000_000; // 5 MB

function checkFile(file: File) {
  if (!ACCEPTED_TYPES.includes(file.type)) {
    return "This file isn't a JPG, PNG or PDF. Choose a photo or a PDF.";
  }
  if (file.size > MAX_SIZE) {
    return "This file is larger than 5 MB. Choose a smaller photo.";
  }
  return null;
}

export default function FileInputDemo() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>();
  const [error, setError] = useState<string | null>(null);
  const timer = useRef<number>(undefined);

  useEffect(() => {
    const current = timer;
    return () => window.clearInterval(current.current);
  }, []);

  function handleFileSelect(chosen: File) {
    const message = checkFile(chosen);
    setError(message);
    if (message) return;

    // In a real service, upload the file to your server and report progress.
    setFile(chosen);
    setProgress(0);
    let percent = 0;
    timer.current = window.setInterval(() => {
      percent += 20;
      if (percent < 100) {
        setProgress(percent);
      } else {
        window.clearInterval(timer.current);
        setProgress(undefined);
      }
    }, 400);
  }

  function handleRemove() {
    window.clearInterval(timer.current);
    setFile(null);
    setProgress(undefined);
  }

  return (
    <Field invalid={error !== null} className="w-full max-w-100">
      <FieldLabel>Photo of your valid ID</FieldLabel>
      <FieldDescription>JPG, PNG or PDF, up to 5 MB.</FieldDescription>
      <FileInput
        accept={ACCEPTED_TYPES.join(",")}
        file={file}
        progress={progress}
        onFileSelect={handleFileSelect}
        onRemove={handleRemove}
      />
      {!file && !error && (
        <FieldDescription className="flex items-start gap-2">
          <StatusIcon kind="info" />
          <span>
            Take the photo on a flat surface. Make sure all four corners of the
            ID are visible and the text is sharp.
          </span>
        </FieldDescription>
      )}
      <FieldError match>{error}</FieldError>
    </Field>
  );
}
