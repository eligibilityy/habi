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
import {
  searchClearIconVariants,
  searchClearVariants,
  searchContentVariants,
  searchEmptyVariants,
  searchIconVariants,
  searchInputVariants,
  searchItemDescriptionVariants,
  searchItemTextVariants,
  searchItemVariants,
  searchListVariants,
  searchPositionerVariants,
  searchShortcutVariants,
  searchVariants,
} from "@/registry/habi/ui/search.variants";

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
      className={cn(searchVariants(), className)}
    >
      <MagnifyingGlassIcon className={searchIconVariants()} />
      <Autocomplete.Input
        ref={setRefs}
        type="search"
        enterKeyHint="search"
        aria-keyshortcuts={
          showHint ? (isApple ? "Meta+K" : "Control+K") : undefined
        }
        className={cn(searchInputVariants())}
        {...props}
      />
      {showHint && (
        <kbd aria-hidden="true" className={searchShortcutVariants()}>
          {isApple ? "⌘K" : "Ctrl K"}
        </kbd>
      )}
      <Autocomplete.Clear
        data-slot="search-clear"
        aria-label={clearLabel}
        className={searchClearVariants()}
      >
        <XMarkIcon className={searchClearIconVariants()} />
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
      <Autocomplete.Positioner
        sideOffset={4}
        className={searchPositionerVariants()}
      >
        <Autocomplete.Popup
          data-slot="search-content"
          className={cn(searchContentVariants(), className)}
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
      className={cn(searchListVariants(), className)}
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
      className={cn(searchItemVariants(), className)}
      {...props}
    />
  );
}

function SearchItemText({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      data-slot="search-item-text"
      className={cn(searchItemTextVariants(), className)}
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
      className={cn(searchItemDescriptionVariants(), className)}
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
      className={cn(searchEmptyVariants(), className)}
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
