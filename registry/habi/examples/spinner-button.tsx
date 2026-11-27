"use client";

import { useState } from "react";

import { Button } from "@/registry/habi/ui/button";
import { Spinner } from "@/registry/habi/ui/spinner";

export default function SpinnerButton() {
  const [paying, setPaying] = useState(false);

  return (
    <Button
      // Ignore more presses while paying, so people aren't charged twice.
      // The button keeps its colour, so the white spinner stays visible.
      onClick={() => {
        if (paying) return;
        setPaying(true);
        setTimeout(() => setPaying(false), 3000);
      }}
    >
      {paying ? (
        <>
          <Spinner tone="inverse" aria-hidden />
          Paying…
        </>
      ) : (
        "Pay ₱950"
      )}
    </Button>
  );
}
