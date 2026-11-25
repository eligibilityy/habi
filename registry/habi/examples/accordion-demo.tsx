import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/registry/habi/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion className="max-w-2xl">
      <AccordionItem>
        <AccordionTrigger>What documents do I need?</AccordionTrigger>
        <AccordionPanel>
          One valid government ID, your PSA birth certificate and your
          appointment confirmation. Bring the original and one photocopy of
          each.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>How long does it take?</AccordionTrigger>
        <AccordionPanel>
          Most clearances are released on the day of your appointment. If your
          name matches a record, it can take up to 10 working days.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Can someone else pick it up?</AccordionTrigger>
        <AccordionPanel>
          Yes, with your signed authorisation letter and both your valid IDs.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
