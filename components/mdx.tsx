import type { HTMLAttributes } from "react";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Pre } from "fumadocs-ui/components/codeblock";
import type { MDXComponents } from "mdx/types";
import { Callout } from "@/components/docs/callout";
import {
  CodeBlock,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
} from "@/components/docs/code-block";
import {
  PrimitiveColors,
  SemanticColors,
} from "@/components/docs/color-tokens";
import {
  FocusRingDemo,
  MotionScale,
  RadiusScale,
  ShadowScale,
  SpacingScale,
  TypeScale,
} from "@/components/docs/foundation-tokens";
import {
  ComponentPreview,
  ComponentSource,
} from "@/components/docs/component-preview";
import { DocsCard } from "@/components/docs/docs-card";
import { PropsTable } from "@/components/docs/props-table";

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    pre: (props: HTMLAttributes<HTMLPreElement>) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    CodeBlockTabs,
    CodeBlockTabsList,
    CodeBlockTabsTrigger,
    Callout,
    Card: DocsCard,
    PrimitiveColors,
    SemanticColors,
    FocusRingDemo,
    MotionScale,
    RadiusScale,
    ShadowScale,
    SpacingScale,
    TypeScale,
    ComponentPreview,
    ComponentSource,
    PropsTable,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
