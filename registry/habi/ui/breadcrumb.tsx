import type { ComponentProps } from "react";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

import { cn } from "@/registry/habi/lib/utils";
import { Link, type LinkProps } from "@/registry/habi/ui/link";

function Breadcrumb({
  "aria-label": ariaLabel = "Breadcrumb",
  ...props
}: ComponentProps<"nav">) {
  return <nav data-slot="breadcrumb" aria-label={ariaLabel} {...props} />;
}

function BreadcrumbList({ className, ...props }: ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-2 text-body-sm text-text-secondary",
        // Phones show only the page above the current one, as a back link.
        // It's the third item from the end: page above, separator, current page.
        "max-sm:*:hidden max-sm:[&>li:nth-last-child(3)]:inline-flex max-sm:[&>li:nth-last-child(3)_[data-slot=breadcrumb-back-icon]]:block",
        className,
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({ children, ...props }: Omit<LinkProps, "size">) {
  return (
    <Link data-slot="breadcrumb-link" size="small" standalone {...props}>
      <ChevronLeftIcon data-slot="breadcrumb-back-icon" className="hidden" />
      {children}
    </Link>
  );
}

function BreadcrumbPage({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      className={cn("text-text-primary", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  className,
  children = "/",
  ...props
}: ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden
      className={className}
      {...props}
    >
      {children}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      aria-hidden
      className={className}
      {...props}
    >
      …
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
