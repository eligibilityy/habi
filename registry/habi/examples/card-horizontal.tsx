import { ClockIcon, GlobeAltIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import NextLink from "next/link";

import { buttonVariants } from "@/registry/habi/ui/button";
import {
  Card,
  CardActions,
  CardBody,
  CardDescription,
  CardEyebrow,
  CardHeader,
  CardImage,
  CardMeta,
  CardMetaItem,
  CardTitle,
} from "@/registry/habi/ui/card";

export default function CardHorizontal() {
  return (
    <Card layout="horizontal" className="w-full">
      <CardImage>
        <Image
          src="/examples/card-image.png"
          alt=""
          fill
          sizes="(min-width: 640px) 240px, 100vw"
        />
      </CardImage>
      <CardBody>
        <CardHeader>
          <CardEyebrow>DFA · Passport</CardEyebrow>
          <CardTitle>Renew your passport</CardTitle>
          <CardDescription>
            Book an appointment online, prepare your old passport, and pay the
            fee before you go to the consular office.
          </CardDescription>
        </CardHeader>
        <CardMeta>
          <CardMetaItem>
            <ClockIcon />
            About 15 minutes
          </CardMetaItem>
          <CardMetaItem>
            <GlobeAltIcon />
            Online
          </CardMetaItem>
        </CardMeta>
        <CardActions>
          <NextLink href="/docs" className={buttonVariants()}>
            Start now
            <span className="sr-only">: renew your passport</span>
          </NextLink>
        </CardActions>
      </CardBody>
    </Card>
  );
}
