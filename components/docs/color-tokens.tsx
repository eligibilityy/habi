import { getPrimitiveRamps, getSemanticColors } from "@/lib/tokens";

function Swatch({ cssVar, className }: { cssVar: string; className: string }) {
  return (
    <span
      aria-hidden
      className={`block rounded-sm border border-border-subtle-01 ${className}`}
      style={{ backgroundColor: `var(${cssVar})` }}
    />
  );
}

export function SemanticColors({ group }: { group: string }) {
  const colors = getSemanticColors(group);

  return (
    <div className="not-prose my-6 overflow-x-auto">
      <table className="w-full text-body-sm">
        <thead className="text-left text-text-secondary">
          <tr>
            <th className="py-2 pr-4 font-semibold">Token</th>
            <th className="py-2 pr-4 font-semibold">Value</th>
            <th className="py-2 font-semibold">CSS variable</th>
          </tr>
        </thead>
        <tbody>
          {colors.map((color) => (
            <tr key={color.name} className="border-t border-border-subtle-01">
              <td className="py-2 pr-4">
                <span className="flex items-center gap-3">
                  <Swatch cssVar={color.cssVar} className="size-6 shrink-0" />
                  <span className="text-label">{color.name}</span>
                </span>
              </td>
              <td className="py-2 pr-4 text-text-secondary">
                {color.ref} · <code className="font-mono">{color.hex}</code>
              </td>
              <td className="py-2">
                <code className="font-mono">{color.cssVar}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PrimitiveColors() {
  return (
    <div className="not-prose my-6 flex flex-col gap-8">
      {getPrimitiveRamps().map(({ group, colors }) => (
        <div key={group}>
          <p className="mb-3 text-heading-xs capitalize">{group}</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
            {colors.map((color) => (
              <div key={color.name} className="flex flex-col gap-1">
                <Swatch cssVar={color.cssVar} className="h-12" />
                <span className="text-label">{color.name}</span>
                <code className="font-mono text-body-sm text-text-secondary">
                  {color.hex}
                </code>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
