import { StatusIcon } from "@/registry/habi/ui/status-icon";

export default function StatusIconDemo() {
  return (
    <ul className="flex flex-col gap-3 text-body-md text-text-primary">
      <li className="flex items-start gap-2">
        <StatusIcon kind="info" />
        Your appointment is on 15 March 2026.
      </li>
      <li className="flex items-start gap-2">
        <StatusIcon kind="success" />
        We&apos;ve checked your documents.
      </li>
      <li className="flex items-start gap-2">
        <StatusIcon kind="warning" />
        Your payment is due in 2 days.
      </li>
      <li className="flex items-start gap-2">
        <StatusIcon kind="error" />
        Your ID photo is too blurry to read.
      </li>
    </ul>
  );
}
