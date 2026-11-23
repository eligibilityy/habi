import { MagnifyingGlassIcon, TrashIcon } from "@heroicons/react/20/solid";

import { Button } from "@/registry/habi/ui/button";

export default function ButtonIconOnly() {
  return (
    <>
      <Button iconOnly aria-label="Search">
        <MagnifyingGlassIcon />
      </Button>
      <Button iconOnly kind="danger" aria-label="Delete document">
        <TrashIcon />
      </Button>
    </>
  );
}
