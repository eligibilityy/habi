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
        // Flat: a grey fill and no border. In tabs, the tabs' box has the fill.
        "border-0",
        inTabs
          ? "mx-0 mb-0 bg-transparent last:rounded-b-none"
          : "my-6 rounded-(--radius-control) bg-layer-accent-01",
        // The copy button's blurred backdrop.
        "[&>.backdrop-blur-lg]:rounded-(--radius-control)",
        // A titled block's file bar is as tall as the tab bars.
        props.title && "[&>div:first-child]:h-10",
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
          "my-6 overflow-hidden rounded-(--radius-control) border-0 bg-layer-accent-01",
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
      className={cn("border-b border-border-subtle-01", className)}
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
        "h-10 px-3 text-sm font-semibold text-text-secondary hover:text-text-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-default data-active:text-text-primary [&>div]:inset-x-0 [&>div]:h-0.5",
        className,
      )}
      {...props}
    />
  );
}
