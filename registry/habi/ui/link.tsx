"use client";

import { useRender } from "@base-ui/react/use-render";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";
import { linkVariants } from "@/registry/habi/ui/link.variants";

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
