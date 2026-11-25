import type { ComponentProps } from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

function Accordion({
  className,
  hiddenUntilFound = true,
  ...props
}: WithStringClassName<ComponentProps<typeof AccordionPrimitive.Root>>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      hiddenUntilFound={hiddenUntilFound}
      className={cn(
        "flex w-full flex-col border-b border-border-subtle-01",
        className,
      )}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof AccordionPrimitive.Item>>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-t border-border-subtle-01", className)}
      {...props}
    />
  );
}

type AccordionTriggerProps = WithStringClassName<
  ComponentProps<typeof AccordionPrimitive.Trigger>
> & {
  /** The heading level around the button. Match it to the page's outline. */
  level?: 2 | 3 | 4 | 5 | 6;
};

function AccordionTrigger({
  className,
  level = 3,
  children,
  ...props
}: AccordionTriggerProps) {
  const Heading = `h${level}` as const;

  return (
    <AccordionPrimitive.Header
      data-slot="accordion-header"
      render={<Heading />}
    >
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex w-full cursor-pointer items-center gap-4 p-4 text-left text-heading-xs text-text-primary",
          "hover:bg-background-hover",
          "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-default",
          className,
        )}
        {...props}
      >
        <span className="min-w-0 flex-1">{children}</span>
        <ChevronDownIcon
          aria-hidden
          className="size-5 shrink-0 text-icon-primary group-data-panel-open:rotate-180 motion-safe:transition-transform motion-safe:duration-(--duration-fast) motion-safe:ease-out"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionPanel({
  className,
  children,
  ...props
}: WithStringClassName<ComponentProps<typeof AccordionPrimitive.Panel>>) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className="h-(--accordion-panel-height) overflow-hidden data-ending-style:h-0 data-starting-style:h-0 motion-safe:transition-[height] motion-safe:duration-(--duration-short) motion-safe:ease-out"
      {...props}
    >
      <div
        className={cn(
          "px-4 pb-6 text-body-md text-text-secondary sm:pr-16",
          className,
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Panel>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
  type AccordionTriggerProps,
};
