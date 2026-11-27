import { ChevronLeftIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import { Link, type LinkProps } from "@/registry/habi/ui/link";

type BackLinkProps = Omit<LinkProps, "size" | "standalone">;

function BackLink({ className, children = "Back", ...props }: BackLinkProps) {
  return (
    <Link
      data-slot="back-link"
      standalone
      size="medium"
      // People have always visited the page before, so it never turns purple.
      className={cn("visited:text-link-primary", className)}
      {...props}
    >
      <ChevronLeftIcon aria-hidden />
      {children}
    </Link>
  );
}

export { BackLink, type BackLinkProps };
