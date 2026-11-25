import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/20/solid";

import { Button } from "@/registry/habi/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/habi/ui/tooltip";

export default function ButtonIconOnly() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button iconOnly aria-label="Search" />}>
          <MagnifyingGlassIcon />
        </TooltipTrigger>
        <TooltipContent>Search</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button iconOnly kind="danger" aria-label="Delete document" />
          }
        >
          <TrashIcon />
        </TooltipTrigger>
        <TooltipContent>Delete document</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
