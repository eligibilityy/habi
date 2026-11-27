import { SkipLink } from "@/registry/habi/ui/skip-link";

export default function SkipLinkDemo() {
  return (
    <div className="relative flex min-h-40 w-full max-w-lg flex-col justify-end gap-2 rounded-control border border-dashed border-border-strong-01 p-4 pt-20">
      <p className="text-body-sm text-text-secondary">
        Click this text, then press Tab.
      </p>
      <SkipLink href="#skip-link-demo-content" />
      <div id="skip-link-demo-content" className="text-body-md outline-none">
        The main content starts here.
      </div>
    </div>
  );
}
