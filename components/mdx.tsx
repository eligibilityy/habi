import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import {
  PrimitiveColors,
  SemanticColors,
} from "@/components/docs/color-tokens";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    PrimitiveColors,
    SemanticColors,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
