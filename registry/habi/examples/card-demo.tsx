import {
  BanknotesIcon,
  ClockIcon,
  GlobeAltIcon,
} from "@heroicons/react/20/solid";
import NextLink from "next/link";

import { buttonVariants } from "@/registry/habi/ui/button";
import {
  Card,
  CardActions,
  CardBody,
  CardDescription,
  CardEyebrow,
  CardHeader,
  CardMeta,
  CardMetaItem,
  CardTitle,
} from "@/registry/habi/ui/card";
import { Link } from "@/registry/habi/ui/link";

export default function CardDemo() {
  return (
    <Card className="w-full max-w-90">
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
          <CardMetaItem>
            <BanknotesIcon />
            ₱950.00
          </CardMetaItem>
        </CardMeta>
        <CardActions>
          <NextLink href="/docs" className={buttonVariants()}>
            Start now
            <span className="sr-only">: renew your passport</span>
          </NextLink>
          <Link
            standalone
            className="text-button"
            render={<NextLink href="/docs" />}
          >
            Learn more
            <span className="sr-only"> about renewing your passport</span>
          </Link>
        </CardActions>
      </CardBody>
    </Card>
  );
}
