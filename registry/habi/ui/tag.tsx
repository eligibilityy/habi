import type { ComponentProps } from "react";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { CheckIcon } from "@heroicons/react/16/solid";

import { cn } from "@/registry/habi/lib/utils";

type TagProps = Omit<ComponentProps<typeof Toggle>, "className"> & {
  className?: string;
};

function Tag({ className, children, ...props }: TagProps) {
  return (
    <Toggle
      data-slot="tag"
      className={cn(
        "group inline-flex h-8 shrink-0 items-center gap-1.5 rounded-md border px-4 text-label whitespace-nowrap select-none",
        "border-border-strong-01 bg-layer-01 text-text-primary",
        "hover:not-data-disabled:border-border-hover hover:not-data-disabled:bg-background-hover",
        "data-pressed:border-interactive-default data-pressed:bg-highlight-default data-pressed:pl-3 data-pressed:text-link-primary",
        "hover:not-data-disabled:data-pressed:border-interactive-hover hover:not-data-disabled:data-pressed:bg-highlight-default hover:not-data-disabled:data-pressed:text-link-primary-hover",
        "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:text-text-disabled",
        "data-disabled:data-pressed:border-border-disabled data-disabled:data-pressed:bg-layer-accent-01 data-disabled:data-pressed:text-text-disabled",
        "focus-visible:focus-ring",
        className,
      )}
      {...props}
    >
      <CheckIcon className="hidden size-4 shrink-0 group-data-pressed:block" />
      {children}
    </Toggle>
  );
}

type TagGroupProps = Omit<ComponentProps<typeof ToggleGroup>, "className"> & {
  className?: string;
};

function TagGroup({ className, ...props }: TagGroupProps) {
  return (
    <ToggleGroup
      data-slot="tag-group"
      className={cn("flex flex-wrap gap-2", className)}
      {...props}
    />
  );
}

export { Tag, TagGroup, type TagProps, type TagGroupProps };
