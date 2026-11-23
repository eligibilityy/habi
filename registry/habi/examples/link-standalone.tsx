import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon as ChevronRightMicroIcon } from "@heroicons/react/16/solid";

import { Link } from "@/registry/habi/ui/link";

export default function LinkStandalone() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Link standalone size="medium" href="/docs/components/link">
        Check what to bring
        <ChevronRightIcon />
      </Link>
      <Link standalone size="small" href="/docs/components/link">
        See all requirements
        <ChevronRightMicroIcon />
      </Link>
    </div>
  );
}
