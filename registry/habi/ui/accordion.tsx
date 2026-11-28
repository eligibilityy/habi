import type { ComponentProps } from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import {
  accordionItemVariants,
  accordionPanelContentVariants,
  accordionPanelVariants,
  accordionTriggerIconVariants,
  accordionTriggerLabelVariants,
  accordionTriggerVariants,
  accordionVariants,
} from "@/registry/habi/ui/accordion.variants";

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
      className={cn(accordionVariants(), className)}
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
      className={cn(accordionItemVariants(), className)}
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
        className={cn(accordionTriggerVariants(), className)}
        {...props}
      >
        <span className={accordionTriggerLabelVariants()}>{children}</span>
        <ChevronDownIcon
          aria-hidden
          className={accordionTriggerIconVariants()}
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
      className={accordionPanelVariants()}
      {...props}
    >
      <div className={cn(accordionPanelContentVariants(), className)}>
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
