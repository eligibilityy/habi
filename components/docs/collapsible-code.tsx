"use client";

import {
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/registry/habi/lib/utils";

/** The height of a collapsed example's code: about five lines. */
const collapsedHeight = 160;

/**
 * An example's code under its preview, like Base UI's docs: long code starts
 * collapsed, with a button to show all of it. Short code shows in full.
 */
export function CollapsibleCode({ children }: { children: ReactNode }) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [long, setLong] = useState(true);

  useLayoutEffect(() => {
    if (ref.current) setLong(ref.current.scrollHeight > collapsedHeight + 24);
  }, []);

  const collapsed = long && !open;

  return (
    <div className="relative border-t border-border-subtle-01 bg-layer-02">
      <div
        id={id}
        ref={ref}
        style={collapsed ? { maxHeight: collapsedHeight } : undefined}
        className={cn(collapsed && "overflow-hidden")}
      >
        {children}
      </div>
      {long && (
        <div
          className={cn(
            "flex justify-center pb-4",
            collapsed &&
              "absolute inset-x-0 bottom-0 h-24 items-end bg-linear-to-t from-layer-02 from-30% to-transparent",
          )}
        >
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen(!open)}
            className="h-8 rounded-full border border-border-subtle-01 bg-layer-01 px-3 text-label text-text-primary outline-none hover:bg-background-hover focus-visible:focus-ring"
          >
            {open ? "Hide code" : "Show code"}
          </button>
        </div>
      )}
    </div>
  );
}
