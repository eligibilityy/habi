import { Notification } from "@/registry/habi/ui/notification";

export default function NotificationDemo() {
  return (
    <Notification kind="success" title="Payment received" className="max-w-xl">
      Your reference number is{" "}
      <span className="font-mono">NBI-2026-1215-0417</span>. We&apos;ve sent it
      to your email.
    </Notification>
  );
}
