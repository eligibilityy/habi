import NextLink from "next/link";

import { Link } from "@/registry/habi/ui/link";

export default function LinkNext() {
  return (
    <p className="text-body-md">
      Read the{" "}
      <Link render={<NextLink href="/docs/components/link" />}>
        Button guidance
      </Link>{" "}
      before you start.
    </p>
  );
}
