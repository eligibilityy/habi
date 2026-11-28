import type { ComponentProps } from "react";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import { CheckIcon } from "@heroicons/react/16/solid";

import { cn } from "@/registry/habi/lib/utils";
import {
  tagCheckIconVariants,
  tagGroupVariants,
  tagVariants,
} from "@/registry/habi/ui/tag.variants";

type TagProps = Omit<ComponentProps<typeof Toggle>, "className"> & {
  className?: string;
};

function Tag({ className, children, ...props }: TagProps) {
  return (
    <Toggle data-slot="tag" className={cn(tagVariants(), className)} {...props}>
      <CheckIcon className={tagCheckIconVariants()} />
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
      className={cn(tagGroupVariants(), className)}
      {...props}
    />
  );
}

export { Tag, TagGroup, type TagProps, type TagGroupProps };
