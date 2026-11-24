type PropRow = {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
};

export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-card border border-border-subtle-01 bg-layer-01">
      <table className="w-full text-body-sm">
        <thead className="border-b border-border-subtle-01 bg-layer-accent-01 text-left text-text-secondary">
          <tr>
            <th className="px-4 py-3 font-semibold">Prop</th>
            <th className="px-4 py-3 font-semibold">Type</th>
            <th className="px-4 py-3 font-semibold">Default</th>
            <th className="px-4 py-3 font-semibold">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle-01">
          {rows.map((row) => (
            <tr key={row.name} className="align-top">
              <td className="px-4 py-3">
                <code className="font-mono">{row.name}</code>
                {row.required && (
                  <span className="mt-1 block text-helper text-text-secondary">
                    Required
                  </span>
                )}
              </td>
              <td className="px-4 py-3 text-text-secondary">
                <code className="font-mono">{row.type}</code>
              </td>
              <td className="px-4 py-3">
                <code className="font-mono">{row.default ?? "–"}</code>
              </td>
              <td className="px-4 py-3">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
