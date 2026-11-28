import { ChevronLeftIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";
import { backLinkVariants } from "@/registry/habi/ui/back-link.variants";
import { Link, type LinkProps } from "@/registry/habi/ui/link";

type BackLinkProps = Omit<LinkProps, "size" | "standalone">;

function BackLink({ className, children = "Back", ...props }: BackLinkProps) {
  return (
    <Link
      data-slot="back-link"
      standalone
      size="medium"
      className={cn(backLinkVariants(), className)}
      {...props}
    >
      <ChevronLeftIcon aria-hidden />
      {children}
    </Link>
  );
}

export { BackLink, type BackLinkProps };
