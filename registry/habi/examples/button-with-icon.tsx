import { ArrowDownTrayIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import { Button } from "@/registry/habi/ui/button";

export default function ButtonWithIcon() {
  return (
    <>
      <Button kind="tertiary">
        <ArrowDownTrayIcon />
        Download receipt
      </Button>
      <Button>
        Continue
        <ArrowRightIcon />
      </Button>
    </>
  );
}
