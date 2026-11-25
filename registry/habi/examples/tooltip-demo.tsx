import { ClipboardDocumentIcon } from "@heroicons/react/20/solid";

import { Button } from "@/registry/habi/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/habi/ui/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button kind="tertiary" iconOnly aria-label="Copy reference number" />
        }
      >
        <ClipboardDocumentIcon />
      </TooltipTrigger>
      <TooltipContent>Copy reference number</TooltipContent>
    </Tooltip>
  );
}
