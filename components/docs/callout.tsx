import type { ComponentProps } from "react";
import { Callout as FumadocsCallout } from "fumadocs-ui/components/callout";

import { cn } from "@/registry/habi/lib/utils";

export function Callout({
  className,
  ...props
}: ComponentProps<typeof FumadocsCallout>) {
  return <FumadocsCallout className={cn("rounded-sm", className)} {...props} />;
}
