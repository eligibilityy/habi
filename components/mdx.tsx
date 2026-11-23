import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import {
  PrimitiveColors,
  SemanticColors,
} from "@/components/docs/color-tokens";
import {
  FocusRingDemo,
  RadiusScale,
  ShadowScale,
  SpacingScale,
  TypeScale,
} from "@/components/docs/foundation-tokens";
import { ComponentPreview } from "@/components/docs/component-preview";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    PrimitiveColors,
    SemanticColors,
    FocusRingDemo,
    RadiusScale,
    ShadowScale,
    SpacingScale,
    TypeScale,
    ComponentPreview,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
