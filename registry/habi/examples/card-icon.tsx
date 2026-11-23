import { ClockIcon, MapPinIcon } from "@heroicons/react/20/solid";
import { IdentificationIcon } from "@heroicons/react/24/outline";
import NextLink from "next/link";

import { buttonVariants } from "@/registry/habi/ui/button";
import {
  Card,
  CardActions,
  CardBody,
  CardDescription,
  CardEyebrow,
  CardHeader,
  CardIcon,
  CardMeta,
  CardMetaItem,
  CardTitle,
} from "@/registry/habi/ui/card";

export default function CardWithIcon() {
  return (
    <Card className="w-full max-w-90">
      <CardIcon>
        <IdentificationIcon />
      </CardIcon>
      <CardBody>
        <CardHeader>
          <CardEyebrow>PSA · PhilSys</CardEyebrow>
          <CardTitle>Register for a National ID</CardTitle>
          <CardDescription>
            Book a registration slot, then bring one supporting document to your
            appointment.
          </CardDescription>
        </CardHeader>
        <CardMeta>
          <CardMetaItem>
            <ClockIcon />
            About 30 minutes
          </CardMetaItem>
          <CardMetaItem>
            <MapPinIcon />
            In person
          </CardMetaItem>
        </CardMeta>
        <CardActions>
          <NextLink href="/docs" className={buttonVariants()}>
            Book a slot
            <span className="sr-only"> for National ID registration</span>
          </NextLink>
        </CardActions>
      </CardBody>
    </Card>
  );
}
