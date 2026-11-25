import type { ReactNode } from "react";
import { Tabs } from "@base-ui/react/tabs";

import { cn } from "@/registry/habi/lib/utils";

export const tabClass =
  "text-label text-text-secondary hover:text-text-primary data-active:text-text-primary data-active:border-text-primary focus-visible:outline-focus-default -mb-px flex h-12 items-center border-b-2 border-transparent px-3 focus-visible:outline-2 focus-visible:-outline-offset-2";

/** Command and Manual tabs for a component page's Installation section. */
export function InstallationTabs({ children }: { children: ReactNode }) {
  return (
    <Tabs.Root defaultValue="command" className="my-6">
      <Tabs.List className="not-prose flex border-b border-border-subtle-01">
        <Tabs.Tab value="command" className={tabClass}>
          Command
        </Tabs.Tab>
        <Tabs.Tab value="manual" className={tabClass}>
          Manual
        </Tabs.Tab>
      </Tabs.List>
      {children}
    </Tabs.Root>
  );
}

export function InstallationTab({
  value,
  children,
}: {
  value: "command" | "manual";
  children: ReactNode;
}) {
  return (
    <Tabs.Panel
      value={value}
      className={cn(
        "rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-default",
        "[&>:first-child]:mt-6 [&>:last-child]:mb-0",
      )}
    >
      {children}
    </Tabs.Panel>
  );
}
