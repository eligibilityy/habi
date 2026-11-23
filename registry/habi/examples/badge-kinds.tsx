import { Badge } from "@/registry/habi/ui/badge";

export default function BadgeKinds() {
  return (
    <>
      <Badge kind="neutral">Draft</Badge>
      <Badge kind="info">New</Badge>
      <Badge kind="success">Open</Badge>
      <Badge kind="warning">Closing soon</Badge>
      <Badge kind="error">Closed</Badge>
    </>
  );
}
