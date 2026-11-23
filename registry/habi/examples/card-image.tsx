import { CalendarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import NextLink from "next/link";

import { Badge } from "@/registry/habi/ui/badge";
import {
  Card,
  CardActions,
  CardBadges,
  CardBody,
  CardDescription,
  CardHeader,
  CardImage,
  CardMeta,
  CardMetaItem,
  CardTitle,
} from "@/registry/habi/ui/card";
import { Link } from "@/registry/habi/ui/link";

export default function CardWithImage() {
  return (
    <Card className="w-full max-w-90">
      <CardImage>
        <Image
          src="/examples/card-image.png"
          alt=""
          fill
          sizes="(min-width: 640px) 360px, 100vw"
        />
      </CardImage>
      <CardBody>
        <CardHeader>
          <CardBadges>
            <Badge kind="info">New</Badge>
          </CardBadges>
          <CardTitle>New consular office opens in Davao</CardTitle>
          <CardDescription>
            Book passport appointments closer to home from April.
          </CardDescription>
        </CardHeader>
        <CardMeta>
          <CardMetaItem>
            <CalendarIcon />
            15 March 2026
          </CardMetaItem>
        </CardMeta>
        <CardActions>
          <Link
            standalone
            className="text-button"
            render={<NextLink href="/docs" />}
          >
            Read the announcement
          </Link>
        </CardActions>
      </CardBody>
    </Card>
  );
}
