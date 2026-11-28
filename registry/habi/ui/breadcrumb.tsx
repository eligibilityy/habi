import type { ComponentProps } from "react";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";

import { cn } from "@/registry/habi/lib/utils";
import {
  breadcrumbBackIconVariants,
  breadcrumbItemVariants,
  breadcrumbListVariants,
  breadcrumbPageVariants,
} from "@/registry/habi/ui/breadcrumb.variants";
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
      className={cn(breadcrumbListVariants(), className)}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn(breadcrumbItemVariants(), className)}
      {...props}
    />
  );
}

function BreadcrumbLink({ children, ...props }: Omit<LinkProps, "size">) {
  return (
    <Link data-slot="breadcrumb-link" size="small" standalone {...props}>
      <ChevronLeftIcon
        data-slot="breadcrumb-back-icon"
        className={breadcrumbBackIconVariants()}
      />
      {children}
    </Link>
  );
}

function BreadcrumbPage({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      className={cn(breadcrumbPageVariants(), className)}
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
