import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { buttonVariants } from "@/registry/habi/ui/button";

export default function ButtonLink() {
  return (
    <Link href="/docs" className={buttonVariants({ kind: "primary" })}>
      Start now
      <ArrowRightIcon />
    </Link>
  );
}
