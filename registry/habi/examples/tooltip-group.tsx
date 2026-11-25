import {
  ArrowDownTrayIcon,
  PrinterIcon,
  ShareIcon,
} from "@heroicons/react/20/solid";

import { Button } from "@/registry/habi/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/habi/ui/tooltip";

const actions = [
  { label: "Download receipt", Icon: ArrowDownTrayIcon },
  { label: "Print receipt", Icon: PrinterIcon },
  { label: "Share receipt", Icon: ShareIcon },
];

export default function TooltipGroup() {
  return (
    <TooltipProvider>
      <div className="flex gap-2">
        {actions.map(({ label, Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger
              render={<Button kind="subtle" iconOnly aria-label={label} />}
            >
              <Icon />
            </TooltipTrigger>
            <TooltipContent side="bottom">{label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
