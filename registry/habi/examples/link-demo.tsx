import { Link } from "@/registry/habi/ui/link";

export default function LinkDemo() {
  return (
    <p className="text-body-md">
      Bring one valid ID.{" "}
      <Link href="/docs/components/link">Check which IDs we accept</Link>.
    </p>
  );
}
