import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";

const cardVariants = cva(
  "group/card flex flex-col overflow-hidden rounded-card border border-border-subtle-01 bg-layer-01 text-text-primary shadow-card",
  {
    variants: {
      layout: {
        vertical: "",
        horizontal: "sm:flex-row",
      },
    },
    defaultVariants: {
      layout: "vertical",
    },
  },
);

type CardProps = ComponentProps<"div"> & VariantProps<typeof cardVariants>;

function Card({ className, layout, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-layout={layout ?? "vertical"}
      className={cn(cardVariants({ layout }), className)}
      {...props}
    />
  );
}

function CardImage({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-image"
      className={cn(
        "relative h-50 w-full shrink-0 overflow-hidden bg-layer-accent-01 [&_img]:size-full [&_img]:object-cover",
        "sm:group-data-[layout=horizontal]/card:h-auto sm:group-data-[layout=horizontal]/card:min-h-50 sm:group-data-[layout=horizontal]/card:w-60",
        className,
      )}
      {...props}
    />
  );
}

function CardIcon({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-icon"
      className={cn(
        "mx-6 mt-6 flex size-12 shrink-0 items-center justify-center rounded-md bg-highlight-default text-icon-interactive [&_svg]:size-6",
        "sm:group-data-[layout=horizontal]/card:mr-0",
        className,
      )}
      {...props}
    />
  );
}

function CardBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-body"
      className={cn("flex min-w-0 flex-1 flex-col gap-6 p-6", className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function CardBadges({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-badges"
      className={cn("flex flex-wrap gap-2", className)}
      {...props}
    />
  );
}

function CardEyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="card-eyebrow"
      className={cn("text-label text-text-secondary", className)}
      {...props}
    />
  );
}

type CardTitleProps = ComponentProps<"h3"> & { level?: 2 | 3 | 4 | 5 | 6 };

function CardTitle({ className, level = 3, ...props }: CardTitleProps) {
  const Heading = `h${level}` as const;

  return (
    <Heading
      data-slot="card-title"
      className={cn("text-heading-sm text-text-primary", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-body-md text-text-secondary", className)}
      {...props}
    />
  );
}

function CardMeta({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      data-slot="card-meta"
      className={cn(
        "flex flex-wrap gap-x-4 gap-y-2 text-body-sm text-text-secondary",
        className,
      )}
      {...props}
    />
  );
}

function CardMetaItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      data-slot="card-meta-item"
      className={cn(
        "inline-flex items-center gap-2 [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:text-icon-secondary",
        className,
      )}
      {...props}
    />
  );
}

function CardActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-actions"
      className={cn("flex flex-wrap items-center gap-x-6 gap-y-4", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardActions,
  CardBadges,
  CardBody,
  CardDescription,
  CardEyebrow,
  CardHeader,
  CardIcon,
  CardImage,
  CardMeta,
  CardMetaItem,
  CardTitle,
  cardVariants,
  type CardProps,
  type CardTitleProps,
};
