import { Badge } from "@/registry/habi/ui/badge";

export default function BadgeInContext() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-heading-xs">NBI clearance renewal</span>
      <Badge kind="success">
        <span className="sr-only">Status: </span>
        Open
      </Badge>
    </div>
  );
}
