"use client";

import { createContext, use, type ComponentProps } from "react";
import {
  CodeBlock as FumadocsCodeBlock,
  CodeBlockTabs as FumadocsCodeBlockTabs,
  CodeBlockTabsList as FumadocsCodeBlockTabsList,
  CodeBlockTabsTrigger as FumadocsCodeBlockTabsTrigger,
} from "fumadocs-ui/components/codeblock";

import { cn } from "@/registry/habi/lib/utils";

const InCodeBlockTabs = createContext(false);

// rounded-(--radius-control) instead of rounded-control: Fumadocs' own
// tailwind-merge doesn't know Habi's role radii and would keep its rounded-xl.
export function CodeBlock({
  className,
  ...props
}: ComponentProps<typeof FumadocsCodeBlock>) {
  const inTabs = use(InCodeBlockTabs);

  return (
    <FumadocsCodeBlock
      className={cn(
        inTabs
          ? "bg-layer-01 last:rounded-b-none"
          : "my-6 rounded-(--radius-control)",
        // The copy button's blurred backdrop.
        "[&>.backdrop-blur-lg]:rounded-(--radius-control)",
        // A titled block's file bar matches the tab bars on code and previews.
        props.title &&
          "[&>div:first-child]:h-12 [&>div:first-child]:bg-layer-accent-01",
        className,
      )}
      {...props}
    />
  );
}

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

export function CodeBlockTabs({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof FumadocsCodeBlockTabs>>) {
  return (
    <InCodeBlockTabs value>
      <FumadocsCodeBlockTabs
        className={cn(
          "my-6 overflow-hidden rounded-(--radius-control)",
          className,
        )}
        {...props}
      />
    </InCodeBlockTabs>
  );
}

export function CodeBlockTabsList({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof FumadocsCodeBlockTabsList>>) {
  return (
    <FumadocsCodeBlockTabsList
      className={cn("bg-layer-accent-01", className)}
      {...props}
    />
  );
}

// text-sm font-semibold instead of text-label: Fumadocs' own tailwind-merge
// doesn't know Habi's text styles and would drop text-label.
export function CodeBlockTabsTrigger({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof FumadocsCodeBlockTabsTrigger>>) {
  return (
    <FumadocsCodeBlockTabsTrigger
      className={cn(
        "h-12 px-3 text-sm font-semibold text-text-secondary hover:text-text-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-default data-active:text-text-primary [&>div]:inset-x-0 [&>div]:h-0.5",
        className,
      )}
      {...props}
    />
  );
}
