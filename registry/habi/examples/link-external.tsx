import { Link } from "@/registry/habi/ui/link";

export default function LinkExternal() {
  return (
    <p className="text-body-md">
      Habi&apos;s icons come from{" "}
      <Link href="https://heroicons.com" rel="noreferrer">
        Heroicons
      </Link>
      .
    </p>
  );
}
