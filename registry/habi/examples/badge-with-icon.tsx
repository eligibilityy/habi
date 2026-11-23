import { CheckCircleIcon, ClockIcon } from "@heroicons/react/16/solid";

import { Badge } from "@/registry/habi/ui/badge";

export default function BadgeWithIcon() {
  return (
    <>
      <Badge kind="success">
        <CheckCircleIcon />
        Ready
      </Badge>
      <Badge kind="warning">
        <ClockIcon />
        Closing soon
      </Badge>
    </>
  );
}
