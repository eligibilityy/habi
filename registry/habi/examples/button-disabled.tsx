import { Button } from "@/registry/habi/ui/button";

export default function ButtonDisabled() {
  return (
    <>
      <Button disabled>Pay ₱145.00</Button>
      <Button kind="tertiary" disabled>
        Download receipt
      </Button>
    </>
  );
}
