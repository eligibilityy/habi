import tokens from "@/tokens/habi.tokens.json";

export { tokens };

export type ColorToken = {
  name: string;
  cssVar: string;
  hex: string;
  ref?: string;
};

/** "neutral/5" → "neutral-05" (same rule as scripts/build-tokens.mjs) */
export function toCssName(path: string) {
  return path
    .split("/")
    .map((part) => (/^\d$/.test(part) ? `0${part}` : part))
    .join("-");
}

const primitives = tokens.primitive as Record<
  string,
  string | Record<string, string>
>;

function resolvePrimitive(ref: string) {
  const [group, step] = ref.split("/");
  const value = primitives[group];
  const hex = typeof value === "string" ? value : value?.[step];
  if (!hex) throw new Error(`Unknown primitive "${ref}"`);
  return hex;
}

export function getPrimitiveRamps() {
  return Object.entries(primitives).map(([group, value]) => ({
    group,
    colors: (typeof value === "string"
      ? [[group, value]]
      : Object.entries(value).map(([step, hex]) => [`${group}/${step}`, hex])
    ).map(([name, hex]): ColorToken => ({
      name,
      hex,
      cssVar: `--${toCssName(name)}`,
    })),
  }));
}

export function getSemanticColors(group: string): ColorToken[] {
  const colors = Object.entries(tokens.color)
    .filter(([path]) => path.startsWith(`${group}/`))
    .map(([path, ref]) => ({
      name: path,
      ref,
      hex: resolvePrimitive(ref),
      cssVar: `--${toCssName(path)}`,
    }));
  if (colors.length === 0) throw new Error(`No color tokens in "${group}"`);
  return colors;
}
