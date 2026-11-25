import NextLink from "next/link";
import { HomeLayout } from "fumadocs-ui/layouts/home";

import { baseOptions } from "@/lib/layout.shared";
import { Link } from "@/registry/habi/ui/link";

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-4 px-4 py-16 sm:px-8 sm:py-24">
        <h1 className="text-heading-xl text-text-primary">Page not found</h1>
        <p className="text-body-lg text-text-secondary">
          If you typed the address, check it&apos;s spelled correctly. If you
          pasted it, check you copied the whole address.
        </p>
        <p className="text-body-lg text-text-secondary">
          Go to the <Link render={<NextLink href="/" />}>home page</Link> or the{" "}
          <Link render={<NextLink href="/docs" />}>documentation</Link>.
        </p>
      </div>
    </HomeLayout>
  );
}
