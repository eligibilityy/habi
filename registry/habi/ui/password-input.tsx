"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ComponentProps,
  type Ref,
} from "react";
import { Input as BaseInput } from "@base-ui/react/input";

import { cn } from "@/registry/habi/lib/utils";
import {
  passwordInputInputVariants,
  passwordInputStatusVariants,
  passwordInputToggleVariants,
  passwordInputVariants,
} from "@/registry/habi/ui/password-input.variants";

type PasswordInputProps = Omit<
  ComponentProps<typeof BaseInput>,
  "className" | "render" | "type"
> & {
  className?: string;
  /** The button's text while the password is hidden. */
  showLabel?: string;
  /** The button's text while the password is showing. */
  hideLabel?: string;
  /** The button's name for screen readers while the password is hidden. */
  showPasswordLabel?: string;
  /** The button's name for screen readers while the password is showing. */
  hidePasswordLabel?: string;
  /** Read by screen readers after people show the password. */
  shownMessage?: string;
  /** Read by screen readers after people hide the password. */
  hiddenMessage?: string;
};

function PasswordInput({
  className,
  showLabel = "Show",
  hideLabel = "Hide",
  showPasswordLabel = "Show password",
  hidePasswordLabel = "Hide password",
  shownMessage = "Your password is showing.",
  hiddenMessage = "Your password is hidden.",
  autoComplete = "current-password",
  ref,
  ...props
}: PasswordInputProps) {
  const [shown, setShown] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const setRefs = useCallback(
    (node: HTMLInputElement | null) => {
      inputRef.current = node;
      assignRef(ref, node);
    },
    [ref],
  );

  // Hide the password again when the form is sent, so browsers offer to save
  // it and it isn't showing if people come back to the page.
  useEffect(() => {
    const form = inputRef.current?.form;
    const hide = () => {
      setShown(false);
      setMessage("");
    };
    const hideOnReturn = (event: PageTransitionEvent) => {
      if (event.persisted) hide();
    };

    form?.addEventListener("submit", hide);
    window.addEventListener("pageshow", hideOnReturn);
    return () => {
      form?.removeEventListener("submit", hide);
      window.removeEventListener("pageshow", hideOnReturn);
    };
  }, []);

  function toggle() {
    setShown(!shown);
    setMessage(shown ? hiddenMessage : shownMessage);
  }

  return (
    <div
      data-slot="password-input"
      className={cn(passwordInputVariants(), className)}
    >
      <BaseInput
        ref={setRefs}
        type={shown ? "text" : "password"}
        autoComplete={autoComplete}
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        className={passwordInputInputVariants()}
        // A render function gets the Field's state, so the button is
        // disabled whenever the field is.
        render={(inputProps, state) => (
          <>
            <input {...inputProps} />
            <button
              type="button"
              data-slot="password-input-toggle"
              aria-controls={inputProps.id}
              aria-label={shown ? hidePasswordLabel : showPasswordLabel}
              disabled={state.disabled}
              onClick={toggle}
              className={passwordInputToggleVariants()}
            >
              {shown ? hideLabel : showLabel}
            </button>
          </>
        )}
        {...props}
      />
      <span aria-live="polite" className={passwordInputStatusVariants()}>
        {message}
      </span>
    </div>
  );
}

function assignRef<T>(ref: Ref<T> | undefined, value: T) {
  if (typeof ref === "function") ref(value);
  else if (ref) ref.current = value;
}

export { PasswordInput, type PasswordInputProps };
