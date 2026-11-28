import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import { cn } from "@/registry/habi/lib/utils";
import {
  cardActionsVariants,
  cardBadgesVariants,
  cardBodyVariants,
  cardDescriptionVariants,
  cardEyebrowVariants,
  cardHeaderVariants,
  cardIconVariants,
  cardImageVariants,
  cardMetaItemVariants,
  cardMetaVariants,
  cardTitleVariants,
  cardVariants,
} from "@/registry/habi/ui/card.variants";

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
      className={cn(cardImageVariants(), className)}
      {...props}
    />
  );
}

function CardIcon({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-icon"
      className={cn(cardIconVariants(), className)}
      {...props}
    />
  );
}

function CardBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-body"
      className={cn(cardBodyVariants(), className)}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(cardHeaderVariants(), className)}
      {...props}
    />
  );
}

function CardBadges({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-badges"
      className={cn(cardBadgesVariants(), className)}
      {...props}
    />
  );
}

function CardEyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="card-eyebrow"
      className={cn(cardEyebrowVariants(), className)}
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
      className={cn(cardTitleVariants(), className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot="card-description"
      className={cn(cardDescriptionVariants(), className)}
      {...props}
    />
  );
}

function CardMeta({ className, ...props }: ComponentProps<"ul">) {
  return (
    <ul
      data-slot="card-meta"
      className={cn(cardMetaVariants(), className)}
      {...props}
    />
  );
}

function CardMetaItem({ className, ...props }: ComponentProps<"li">) {
  return (
    <li
      data-slot="card-meta-item"
      className={cn(cardMetaItemVariants(), className)}
      {...props}
    />
  );
}

function CardActions({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="card-actions"
      className={cn(cardActionsVariants(), className)}
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
