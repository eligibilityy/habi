import { Spinner } from "@/registry/habi/ui/spinner";

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-8">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  );
}
