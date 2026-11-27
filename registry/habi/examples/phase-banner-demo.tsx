import { Link } from "@/registry/habi/ui/link";
import { PhaseBanner } from "@/registry/habi/ui/phase-banner";

export default function PhaseBannerDemo() {
  return (
    <PhaseBanner phase="Beta" className="w-full">
      This is a new service. Your feedback will help us improve it.
      <Link href="#" size="small">
        Give feedback
      </Link>
    </PhaseBanner>
  );
}
