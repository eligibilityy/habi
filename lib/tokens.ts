import tokens from "@/tokens/habi.tokens.json";

type ColorToken = {
  name: string;
  cssVar: string;
  hex: string;
  ref?: string;
};

// Same naming rule as scripts/build-tokens.mjs: "neutral/5" → "neutral-05"
function toCssName(path: string) {
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

type Weight = keyof typeof tokens.font.weight;

export function getTextStyles() {
  return Object.entries(tokens.textStyle).map(([name, style]) => ({
    name,
    size: style.size,
    lineHeight: style.lineHeight,
    weight: tokens.font.weight[style.weight as Weight],
  }));
}

export function getSpacing() {
  return Object.entries(tokens.spacing).map(([step, px]) => ({
    token: `spacing/${step}`,
    px,
    tailwind: String(px / 4),
  }));
}

export function getRadii() {
  return Object.entries(tokens.radius).map(([name, px]) => ({ name, px }));
}

export function getShadows() {
  return Object.entries(tokens.shadow).map(([name, value]) => ({
    name,
    value,
  }));
}
