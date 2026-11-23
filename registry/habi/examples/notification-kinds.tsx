import { Notification } from "@/registry/habi/ui/notification";

export default function NotificationKinds() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      <Notification kind="info" title="Offices close early on 24 December">
        Appointments that day end at 12:00 PM.
      </Notification>
      <Notification kind="success" title="Appointment booked">
        See you on 15 March 2026 at 9:00 AM.
      </Notification>
      <Notification kind="warning" title="Your ID expires in 30 days">
        Renew it before booking your clearance.
      </Notification>
      <Notification kind="error" title="Payment didn't go through">
        Your card was declined. Try another payment method.
      </Notification>
    </div>
  );
}
