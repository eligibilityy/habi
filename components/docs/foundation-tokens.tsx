import { DocsTable } from "@/components/docs/docs-table";
import {
  getMotion,
  getRadii,
  getShadows,
  getSpacing,
  getTextStyles,
} from "@/lib/tokens";

const rem = (px: number) => `${px / 16}rem`;

export function TypeScale() {
  return (
    <div className="not-prose my-6 flex flex-col">
      {getTextStyles().map((style) => (
        <div
          key={style.name}
          className="flex flex-col gap-2 border-t border-border-subtle-01 py-4 sm:flex-row sm:items-baseline sm:gap-6"
        >
          <div className="flex shrink-0 flex-col text-body-sm text-text-secondary sm:w-44">
            <code className="font-mono text-text-primary">
              text-{style.name}
            </code>
            <span>
              {style.size}/{style.lineHeight} · {style.weight}
            </span>
          </div>
          <p
            style={{
              fontSize: rem(style.size),
              lineHeight: rem(style.lineHeight),
              fontWeight: style.weight,
              fontFamily: style.mono ? "var(--font-mono)" : undefined,
            }}
          >
            Book your NBI clearance appointment
          </p>
        </div>
      ))}
    </div>
  );
}

export function SpacingScale() {
  return (
    <DocsTable>
      <thead>
        <tr>
          <th>Token</th>
          <th>Size</th>
          <th>Tailwind</th>
          <th>
            <span className="sr-only">Preview</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {getSpacing().map((space) => (
          <tr key={space.token}>
            <td className="whitespace-nowrap">
              <code className="font-mono">{space.token}</code>
            </td>
            <td className="whitespace-nowrap">{space.px}px</td>
            <td className="whitespace-nowrap">
              <code className="font-mono">p-{space.tailwind}</code>
            </td>
            <td className="whitespace-nowrap">
              <span
                aria-hidden
                className="block h-4 rounded-sm bg-interactive-default"
                style={{ width: space.px }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </DocsTable>
  );
}

export function RadiusScale() {
  return (
    <div className="not-prose my-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {getRadii().map((radius) => (
        <div key={radius.name} className="flex flex-col gap-2">
          <div
            aria-hidden
            className="h-20 border-2 border-border-interactive bg-highlight-default"
            style={{ borderRadius: radius.px }}
          />
          <code className="font-mono text-label">rounded-{radius.name}</code>
          <span className="text-body-sm text-text-secondary">
            {radius.px}px{radius.alias && ` · same as ${radius.alias}`}
          </span>
        </div>
      ))}
    </div>
  );
}

export function ShadowScale() {
  return (
    <div className="not-prose my-6 grid gap-6 sm:grid-cols-2">
      {getShadows().map((shadow) => (
        <div key={shadow.name} className="flex flex-col gap-3">
          <div
            aria-hidden
            className="h-24 rounded-card bg-layer-01"
            style={{ boxShadow: shadow.value }}
          />
          <code className="font-mono text-label">shadow-{shadow.name}</code>
        </div>
      ))}
    </div>
  );
}

export function MotionScale() {
  const { durations, easings } = getMotion();

  return (
    <DocsTable>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Tailwind</th>
        </tr>
      </thead>
      <tbody>
        {durations.map((duration) => (
          <tr key={duration.name}>
            <td className="whitespace-nowrap">
              <code className="font-mono">--duration-{duration.name}</code>
            </td>
            <td className="whitespace-nowrap">{duration.ms}ms</td>
            <td className="whitespace-nowrap">
              <code className="font-mono">
                duration-(--duration-{duration.name})
              </code>
            </td>
          </tr>
        ))}
        {easings.map((easing) => (
          <tr key={easing.name}>
            <td className="whitespace-nowrap">
              <code className="font-mono">--ease-{easing.name}</code>
            </td>
            <td className="whitespace-nowrap">
              <code className="font-mono">{easing.value}</code>
            </td>
            <td className="whitespace-nowrap">
              <code className="font-mono">ease-{easing.name}</code>
            </td>
          </tr>
        ))}
      </tbody>
    </DocsTable>
  );
}

export function FocusRingDemo() {
  return (
    <div className="not-prose my-6 flex flex-wrap items-center gap-6">
      <span className="inline-flex h-12 items-center rounded-control bg-button-primary px-4 text-button text-text-on-color focus-ring">
        Focused (example)
      </span>
      <button
        type="button"
        className="inline-flex h-12 items-center rounded-control border border-border-strong-01 bg-layer-01 px-4 text-button focus-visible:focus-ring"
      >
        Press Tab to focus me
      </button>
    </div>
  );
}
