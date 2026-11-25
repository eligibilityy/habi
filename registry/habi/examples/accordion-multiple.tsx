import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/habi/ui/accordion";
import { Link } from "@/registry/habi/ui/link";

export default function AccordionMultiple() {
  return (
    <Accordion multiple defaultValue={["first-time"]} className="max-w-2xl">
      <AccordionItem value="first-time">
        <AccordionTrigger>If this is your first passport</AccordionTrigger>
        <AccordionPanel>
          <ul className="list-disc space-y-1 pl-5">
            <li>Your PSA birth certificate</li>
            <li>One valid government ID</li>
            <li>Your appointment confirmation</li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="renewal">
        <AccordionTrigger>
          If you&apos;re renewing your passport
        </AccordionTrigger>
        <AccordionPanel>
          <ul className="list-disc space-y-1 pl-5">
            <li>Your current passport</li>
            <li>Your appointment confirmation</li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="name-change">
        <AccordionTrigger>If your name has changed</AccordionTrigger>
        <AccordionPanel>
          Bring your PSA marriage certificate or the court order as well.{" "}
          <Link href="#">Check which documents prove a change of name</Link>.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
