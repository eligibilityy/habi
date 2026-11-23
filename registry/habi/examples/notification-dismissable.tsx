"use client";

import { useState } from "react";

import { Button } from "@/registry/habi/ui/button";
import { Notification } from "@/registry/habi/ui/notification";

export default function NotificationDismissible() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return (
      <Button kind="tertiary" onClick={() => setVisible(true)}>
        Show notification
      </Button>
    );
  }

  return (
    <Notification
      kind="info"
      title="We've updated the requirements"
      onDismiss={() => setVisible(false)}
      className="max-w-xl"
    >
      You now need one valid ID instead of two.
    </Notification>
  );
}
