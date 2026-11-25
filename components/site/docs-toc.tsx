"use client";

import { useActiveAnchor, useTOCItems } from "fumadocs-ui/components/toc";

import { cn } from "@/registry/habi/lib/utils";

/**
 * "On this page", like Base UI's: plain grey links with no heading or
 * indicator line, the section you're reading in blue. Screen readers still
 * hear the list's name.
 */
export function DocsToc() {
  const items = useTOCItems();
  const active = useActiveAnchor();

  if (items.length === 0) {
    return (
      <div
        id="nd-toc-placeholder"
        className="hidden xl:layout:[--fd-toc-width:268px]"
      />
    );
  }

  return (
    <nav
      id="nd-toc"
      aria-label="On this page"
      className="sticky top-(--fd-docs-row-3) flex h-[calc(var(--fd-docs-height)-var(--fd-docs-row-3))] w-(--fd-toc-width) flex-col overflow-y-auto pe-4 pt-14 pb-2 [grid-area:toc] max-xl:hidden xl:layout:[--fd-toc-width:268px]"
    >
      <ul className="flex flex-col">
        {items.map((item) => {
          const current = item.url === `#${active}`;
          return (
            <li key={item.url} className={cn(item.depth > 2 && "ps-3")}>
              <a
                href={item.url}
                aria-current={current ? "location" : undefined}
                className={cn(
                  "block rounded-sm py-1 text-body-sm text-text-secondary outline-none hover:text-text-primary focus-visible:focus-ring",
                  current &&
                    "text-interactive-default hover:text-interactive-default",
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
