import {
  Details,
  DetailsContent,
  DetailsSummary,
} from "@/registry/habi/ui/details";

export default function DetailsDemo() {
  return (
    <Details className="w-full">
      <DetailsSummary>Help with your reference number</DetailsSummary>
      <DetailsContent>
        Your reference number is in the email we sent after you applied. It
        starts with the agency code, like NBI-2026-1215-0417.
      </DetailsContent>
    </Details>
  );
}
