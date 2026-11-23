import { getRadii, getShadows, getSpacing, getTextStyles } from "@/lib/tokens";

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
    <div className="not-prose my-6 overflow-x-auto">
      <table className="w-full text-body-sm">
        <thead className="text-left text-text-secondary">
          <tr>
            <th className="py-2 pr-4 font-semibold">Token</th>
            <th className="py-2 pr-4 font-semibold">Size</th>
            <th className="py-2 pr-4 font-semibold">Tailwind</th>
            <th className="py-2 font-semibold">
              <span className="sr-only">Preview</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {getSpacing().map((space) => (
            <tr key={space.token} className="border-t border-border-subtle-01">
              <td className="py-2 pr-4">
                <code className="font-mono">{space.token}</code>
              </td>
              <td className="py-2 pr-4">{space.px}px</td>
              <td className="py-2 pr-4">
                <code className="font-mono">p-{space.tailwind}</code>
              </td>
              <td className="py-2">
                <span
                  aria-hidden
                  className="block h-4 rounded-sm bg-interactive-default"
                  style={{ width: space.px }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
            {radius.px}px
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
            className="h-24 rounded-sm bg-layer-01"
            style={{ boxShadow: shadow.value }}
          />
          <code className="font-mono text-label">shadow-{shadow.name}</code>
        </div>
      ))}
    </div>
  );
}

export function FocusRingDemo() {
  return (
    <div className="not-prose my-6 flex flex-wrap items-center gap-6">
      <span className="inline-flex h-12 items-center rounded-sm bg-button-primary px-4 text-button text-text-on-color focus-ring">
        Focused (example)
      </span>
      <button
        type="button"
        className="inline-flex h-12 items-center rounded-sm border border-border-strong-01 bg-layer-01 px-4 text-button focus-visible:focus-ring"
      >
        Press Tab to focus me
      </button>
    </div>
  );
}
