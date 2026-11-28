// Status icon's classes. Every framework's Status icon uses these, so keep them free of framework code.
import { cva } from "class-variance-authority";

export const statusIconVariants = cva("relative inline-block size-5 shrink-0");

// A white or dark shape behind the icon's cut-out, so it reads on any background.
export const statusIconBackingVariants = cva("absolute", {
  variants: {
    kind: {
      info: "inset-[17.5%] rounded-full bg-white",
      success: "inset-[17.5%] rounded-full bg-white",
      warning: "inset-x-[45%] top-[23.75%] bottom-[28.75%] bg-icon-primary",
      error: "inset-[17.5%] rounded-full bg-white",
    },
  },
});

export const statusIconIconVariants = cva("relative size-5", {
  variants: {
    kind: {
      info: "text-support-info",
      success: "text-support-success",
      warning: "text-support-warning",
      error: "text-support-error",
    },
  },
});
