"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useSyncExternalStore,
  type ComponentProps,
  type Ref,
} from "react";
import { Autocomplete } from "@base-ui/react/autocomplete";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/20/solid";

import { cn } from "@/registry/habi/lib/utils";

type WithStringClassName<T> = Omit<T, "className"> & { className?: string };

const Search = Autocomplete.Root;

const subscribeToNothing = () => () => {};

/** `true` on Apple devices, `false` elsewhere, `null` while rendering on the server. */
function useIsApple() {
  return useSyncExternalStore(
    subscribeToNothing,
    () => /mac|iphone|ipad/i.test(navigator.platform),
    () => null,
  );
}

type SearchInputProps = WithStringClassName<
  ComponentProps<typeof Autocomplete.Input>
> & {
  /** Focuses the field with ⌘K (Apple) or Ctrl+K (others) and shows the hint on devices with a mouse or trackpad. */
  shortcut?: boolean;
  /** Names the clear button for screen readers. */
  clearLabel?: string;
};

function SearchInput({
  className,
  shortcut = false,
  clearLabel = "Clear search",
  ref,
  ...props
}: SearchInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isApple = useIsApple();

  const setRefs = useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node;
      assignRef(ref, node);
    },
    [ref],
  );

  useEffect(() => {
    if (!shortcut) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.isComposing) return;
      if (event.key.toLowerCase() !== "k") return;
      if (!(event.metaKey || event.ctrlKey) || event.altKey || event.shiftKey)
        return;

      // Marking the event as handled stops other ⌘K handlers that check
      // `defaultPrevented`, and the browser's own Ctrl+K.
      event.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.select();
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shortcut]);

  const showHint = shortcut && isApple !== null;

  return (
    <Autocomplete.InputGroup
      data-slot="search"
      className={cn(
        "group/search flex h-12 w-full min-w-0 cursor-text items-center gap-3 rounded-control border border-border-strong-01 bg-field-01 px-4 text-body-md text-text-primary",
        "hover:not-data-invalid:not-data-disabled:border-border-hover",
        "focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-focus-default",
        "data-invalid:border-support-error data-invalid:ring-1 data-invalid:ring-support-error data-invalid:ring-inset",
        "data-disabled:cursor-not-allowed data-disabled:border-border-disabled data-disabled:bg-layer-accent-01 data-disabled:text-text-disabled",
        className,
      )}
    >
      <MagnifyingGlassIcon className="size-5 shrink-0 text-icon-secondary group-data-disabled/search:text-text-disabled" />
      <Autocomplete.Input
        ref={setRefs}
        type="search"
        enterKeyHint="search"
        aria-keyshortcuts={
          showHint ? (isApple ? "Meta+K" : "Control+K") : undefined
        }
        className={cn(
          "h-full min-w-0 flex-1 bg-transparent outline-none placeholder:text-text-placeholder",
          "[&::-webkit-search-cancel-button]:appearance-none",
          "data-disabled:cursor-not-allowed data-disabled:placeholder:text-text-disabled",
        )}
        {...props}
      />
      {showHint && (
        <kbd
          aria-hidden="true"
          className="hidden shrink-0 rounded-sm border border-border-subtle-01 px-1.5 font-mono text-xs/5 text-text-secondary group-has-[[data-slot=search-clear]]/search:hidden! group-data-disabled/search:hidden! pointer-fine:inline-flex"
        >
          {isApple ? "⌘K" : "Ctrl K"}
        </kbd>
      )}
      <Autocomplete.Clear
        data-slot="search-clear"
        aria-label={clearLabel}
        className="-m-0.5 inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-control text-icon-primary focus-visible:focus-ring"
      >
        <XMarkIcon className="size-5" />
      </Autocomplete.Clear>
    </Autocomplete.InputGroup>
  );
}

function assignRef<T>(ref: Ref<T> | undefined, value: T) {
  if (typeof ref === "function") ref(value);
  else if (ref) ref.current = value;
}

function SearchContent({
  className,
  children,
  ...props
}: WithStringClassName<ComponentProps<typeof Autocomplete.Popup>>) {
  return (
    <Autocomplete.Portal>
      <Autocomplete.Positioner sideOffset={4} className="z-50 outline-none">
        <Autocomplete.Popup
          data-slot="search-content"
          className={cn(
            "w-(--anchor-width) max-w-(--available-width) rounded-overlay border border-border-subtle-01 bg-layer-01 p-1 shadow-overlay outline-none",
            "data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:transition-opacity motion-safe:duration-(--duration-fast) motion-safe:ease-out",
            className,
          )}
          {...props}
        >
          {children}
        </Autocomplete.Popup>
      </Autocomplete.Positioner>
    </Autocomplete.Portal>
  );
}

function SearchList({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof Autocomplete.List>>) {
  return (
    <Autocomplete.List
      data-slot="search-list"
      className={cn(
        "max-h-[min(27rem,var(--available-height))] scroll-py-1 overflow-y-auto overscroll-contain outline-none",
        className,
      )}
      {...props}
    />
  );
}

function SearchItem({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof Autocomplete.Item>>) {
  return (
    <Autocomplete.Item
      data-slot="search-item"
      className={cn(
        "flex min-h-12 cursor-default items-center gap-3 rounded-sm px-4 py-3 text-body-md text-text-primary outline-none select-none",
        "[&>svg]:size-5 [&>svg]:shrink-0 [&>svg]:text-icon-secondary",
        "data-highlighted:bg-background-hover",
        "data-disabled:cursor-not-allowed data-disabled:text-text-disabled",
        className,
      )}
      {...props}
    />
  );
}

function SearchItemText({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="search-item-text"
      className={cn("min-w-0 flex-1", className)}
      {...props}
    />
  );
}

function SearchItemDescription({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      data-slot="search-item-description"
      className={cn(
        "block text-body-sm text-text-secondary in-data-disabled:text-text-disabled",
        className,
      )}
      {...props}
    />
  );
}

function SearchEmpty({
  className,
  ...props
}: WithStringClassName<ComponentProps<typeof Autocomplete.Empty>>) {
  return (
    <Autocomplete.Empty
      data-slot="search-empty"
      className={cn(
        "px-4 py-3 text-body-md text-text-secondary empty:p-0",
        className,
      )}
      {...props}
    />
  );
}

export {
  Search,
  SearchContent,
  SearchEmpty,
  SearchInput,
  SearchItem,
  SearchItemDescription,
  SearchItemText,
  SearchList,
  type SearchInputProps,
};
