type PropRow = {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
};

function RequiredNote() {
  return <span className="text-helper text-text-secondary">Required</span>;
}

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-card border border-border-subtle-01 bg-layer-01 text-body-sm">
      {/* Phones: one block per prop, so nothing scrolls sideways. */}
      <dl className="divide-y divide-border-subtle-01 sm:hidden">
        {rows.map((row) => (
          <div key={row.name} className="flex flex-col gap-1 px-4 py-3">
            <dt className="flex flex-wrap items-baseline gap-x-2">
              <code className="font-mono font-semibold">{row.name}</code>
              {row.required && <RequiredNote />}
            </dt>
            <dd className="text-text-secondary">
              <code className="font-mono">{row.type}</code>
            </dd>
            {row.default && (
              <dd className="text-text-secondary">
                Default: <code className="font-mono">{row.default}</code>
              </dd>
            )}
            <dd className="mt-1">{row.description}</dd>
          </div>
        ))}
      </dl>

      {/* Wider screens: a table. The default sits under the type, like on
          phones, so Type and Description both get room. */}
      <div className="hidden overflow-x-auto sm:block">
        <table className="w-full">
          <thead className="border-b border-border-subtle-01 bg-layer-accent-01 text-left text-text-secondary">
            <tr>
              <th className="w-0 px-4 py-3 font-semibold">Prop</th>
              <th className="px-4 py-3 font-semibold">Type</th>
              <th className="min-w-56 px-4 py-3 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle-01">
            {rows.map((row) => (
              <tr key={row.name} className="align-top">
                <td className="px-4 py-3 whitespace-nowrap">
                  <code className="font-mono">{row.name}</code>
                  {row.required && (
                    <span className="mt-1 block">
                      <RequiredNote />
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-text-secondary">
                  <code className="font-mono">{row.type}</code>
                  {row.default && (
                    <span className="mt-1 block">
                      Default: <code className="font-mono">{row.default}</code>
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
