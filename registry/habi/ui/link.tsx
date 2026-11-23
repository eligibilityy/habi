"use client";

import * as React from "react";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";

const linkVariants = cva(
  [
    "text-link-primary visited:text-link-visited hover:text-link-primary-hover",
    "decoration-from-font [text-underline-position:from-font]",
    "rounded-[2px] focus-visible:focus-ring",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      size: {
        medium: "text-body-md [&_svg]:size-5",
        small: "text-body-sm [&_svg]:size-4",
      },
      standalone: {
        true: "inline-flex items-center gap-1 hover:underline",
        false: "underline",
      },
    },
    defaultVariants: {
      standalone: false,
    },
  },
);

type LinkProps = useRender.ComponentProps<"a"> &
  VariantProps<typeof linkVariants>;

function Link({
  className,
  size,
  standalone,
  render,
  ref,
  ...props
}: LinkProps) {
  return useRender({
    defaultTagName: "a",
    render,
    ref,
    props: {
      "data-slot": "link",
      ...props,
      className: cn(linkVariants({ size, standalone }), className),
    },
  });
}

export { Link, linkVariants, type LinkProps };
