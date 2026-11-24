import type { ComponentProps } from "react";

// The Habi mark from the Figma cover (node 142:2138): two blue threads woven
// through two yellow ones. Each crossing alternates which thread is on top.
const blueLeft =
  "M346.102 49.3559C354.106 38.1055 351.474 22.4967 340.224 14.4926C328.973 6.48857 313.364 9.12025 305.36 20.3707L44.4931 387.043C36.489 398.293 39.1207 413.902 50.3711 421.906C61.6215 429.91 77.2303 427.278 85.2344 416.028L346.102 49.3559Z";
const blueRight =
  "M511.275 49.3559C519.279 38.1055 516.647 22.4967 505.397 14.4926C494.146 6.48857 478.537 9.12026 470.533 20.3707L209.666 387.043C201.662 398.293 204.294 413.902 215.544 421.906C226.795 429.91 242.403 427.278 250.407 416.028L511.275 49.3559Z";
const yellowTop =
  "M558 112H108C94.1929 112 83 123.193 83 137C83 150.807 94.1929 162 108 162H558C571.807 162 583 150.807 583 137C583 123.193 571.807 112 558 112Z";
const yellowBottom =
  "M475 255H25C11.1929 255 0 266.193 0 280C0 293.807 11.1929 305 25 305H475C488.807 305 500 293.807 500 280C500 266.193 488.807 255 475 255Z";
const yellowBottomRight =
  "M475 255H261C247.193 255 236 266.193 236 280C236 293.807 247.193 305 261 305H475C488.807 305 500 293.807 500 280C500 266.193 488.807 255 475 255Z";

const blue = "#0038A8";
const yellow = "#FCD116";

// In one color, each thread is cut with a gap where another passes over it,
// so the weave stays readable.
const GAP = 36;

type HabiMarkProps = Omit<ComponentProps<"svg">, "viewBox"> & {
  /** One color (currentColor) instead of blue and yellow. */
  mono?: boolean;
};

function HabiMark({ mono = false, ...props }: HabiMarkProps) {
  if (!mono) {
    return (
      <svg viewBox="0 0 583 437" fill="none" aria-hidden="true" {...props}>
        <path d={blueLeft} fill={blue} />
        <path d={yellowBottom} fill={yellow} />
        <path d={blueLeft} fill={blue} />
        <path d={blueRight} fill={blue} />
        <path d={yellowTop} fill={yellow} />
        <path d={blueRight} fill={blue} />
        <path d={yellowBottomRight} fill={yellow} />
      </svg>
    );
  }

  const cut = (id: string, over: string) => (
    <mask
      id={id}
      maskUnits="userSpaceOnUse"
      x="-40"
      y="-40"
      width="663"
      height="517"
    >
      <rect x="-40" y="-40" width="663" height="517" fill="white" />
      <path d={over} fill="black" stroke="black" strokeWidth={GAP} />
    </mask>
  );

  return (
    <svg
      viewBox="0 0 583 437"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <defs>
        {cut("habi-mark-under-top", yellowTop)}
        {cut("habi-mark-under-bottom", yellowBottom)}
        {cut("habi-mark-under-left", blueLeft)}
        {cut("habi-mark-under-right", blueRight)}
      </defs>
      <path d={blueLeft} mask="url(#habi-mark-under-top)" />
      <path d={blueRight} mask="url(#habi-mark-under-bottom)" />
      <path d={yellowBottom} mask="url(#habi-mark-under-left)" />
      <path d={yellowTop} mask="url(#habi-mark-under-right)" />
    </svg>
  );
}

export { HabiMark, type HabiMarkProps };
