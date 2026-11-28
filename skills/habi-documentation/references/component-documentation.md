# Component documentation

This guide explains what to document on Habi component pages.

## Contents

- Page structure
- Component descriptions
- Usage guidance
- Anatomy and variants
- States and interaction
- Content guidelines
- Accessibility
- Responsive behavior
- Examples
- Related components

## Page structure

Every Habi component page uses these sections, in this order:

1. **Frontmatter** `title` and `description` (one sentence: what it helps people do).
2. **Preview:** `<ComponentPreview name="<name>-demo" />`, with no heading.
3. **When to use:** "Use a … when:" with realistic cases, then "Use something else when:" with linked alternatives and the reason.
4. **Installation:** link to [Set up Habi](/docs/installation) (and the shared parts, if the component uses them), an `npm` fence listing only the packages the component's own files import, then a `<ComponentSource>` for the component and one for its classes file (`<component>.variants.ts`). `pnpm registry` adds the classes file's block if it's missing.
5. **Usage:** a minimal `tsx` example.
6. **Examples:** `###` per example, a sentence or two on when to use it, then `<ComponentPreview>`.
7. **Content guidelines:** labels, hints, error messages and other wording.
8. **Props:** `<PropsTable>` (one `###` per part for compound components), then a line on which HTML or Base UI props it also accepts.
9. **Accessibility:** two `###` sections, **What Habi handles** (built-in behavior) and **What you need to do** (developer duties).
10. **Related components:** linked, with one line on how each relates.
11. **Figma:** "[Open <Name> in the Habi Figma file](…?node-id=…)".

Keep every section on every page so pages are easy to compare. Keep a section short when there's little to say, rather than dropping it. Add extra sections only when the component needs them.

## Component description

Explain what the component helps people accomplish.

Keep it short and avoid describing visual appearance unless appearance is central to its purpose.

Good:

> A checkbox lets people select one or more options from a list.

Avoid:

> A checkbox is a small square-shaped interface element that can display a checked or unchecked state.

## When to use

Explain the situations in which the component is appropriate.

Use concrete examples from government services.

For example:

**Use a checkbox when:**

- People can select multiple options.
- People need to agree to a specific statement.
- People need to enable or disable an optional setting.

Explain distinctions between similar components when relevant.

## When not to use

Recommend an alternative when another component better supports the task.

Examples:

- Use a link instead of a button for navigation.
- Use a radio group when people must select only one option from a short list.
- Use a checkbox when people can select multiple options.
- Consider searchable selection for long lists.

Explain the reasoning. Do not impose fixed option-count thresholds without considering the context.

## Anatomy

Document the visible and functional parts of a component when understanding them helps designers or developers.

Examples:

- Label.
- Leading icon.
- Input area.
- Hint text.
- Error message.
- Supporting action.

Use the actual implementation and design as the source of truth.

Anatomy is optional for simple components where the parts are self-explanatory.

## Variants

Explain the purpose and appropriate use of each supported variant.

Document only variants that exist in Habi.

Do not treat every possible styling customization as an official variant.

## States

Document relevant states, such as:

- Default.
- Hover.
- Focus.
- Active.
- Selected.
- Checked.
- Disabled.
- Loading.
- Error.
- Success.
- Expanded.
- Collapsed.

For each important state, explain what causes it and how it affects the component.

Do not list every possible state for every component.

## Behavior and interaction

Explain what happens when people interact with the component.

Cover relevant input methods:

- Pointer.
- Keyboard.
- Touch.
- Assistive technology.

For interactive components, document keyboard behavior explicitly when it isn't obvious.

For example, a radio group should explain arrow-key navigation and selection behavior.

For dialogs and other complex components, explain focus entry, focus containment where applicable, dismissal, and focus restoration.

## Content guidelines

Explain how to write content inside or alongside the component.

Relevant content may include:

- Labels.
- Button text.
- Placeholder text.
- Hint text.
- Error messages.
- Status messages.
- Accessible names.

Prefer specific, action-oriented wording.

Avoid placeholder text as the only field label.

For error messages, explain what went wrong and how someone can correct it.

## Accessibility

Document accessibility requirements relevant to the component.

Consider:

- Semantic HTML.
- Accessible names and descriptions.
- Keyboard interaction.
- Focus visibility.
- Focus management.
- Screen reader announcements.
- Color contrast.
- Target size.
- Motion.
- Error identification and recovery.

Distinguish between behavior provided by the component and requirements developers must implement.

Reference WCAG success criteria when relevant. Use WCAG 2.2 AA as Habi's recommended evaluation baseline unless project requirements specify otherwise.

Do not claim conformance without supporting evidence.

## Responsive behavior

Explain relevant changes across screen sizes and input methods.

Consider:

- Small mobile screens.
- Narrow viewports.
- Browser zoom.
- Touch interaction.
- Content wrapping.
- Overflow.
- Long labels.

Avoid describing a component as responsive without explaining what changes.

## Examples

Use examples that demonstrate meaningful use cases.

Prefer realistic government-service content over meaningless placeholder text.

Keep examples focused on the component being documented.

Explain why an example is recommended when the reasoning is not obvious.

## Do and don't

Use comparisons to communicate important design decisions.

Each recommendation should be specific and explain its reasoning.

Avoid generic advice such as "Don't make the component too complicated."

## Related components

Link to components that are commonly used together or serve similar purposes.

Explain the relationship when it helps people choose between components.

Examples:

- Button and Link.
- Checkbox and Radio group.
- Badge and Tag.
- Text input and Form field.
- Notification and Alert.

## Philippine service considerations

Where relevant, document:

- Mobile usability.
- Low-bandwidth behavior.
- Clear language.
- Localization.
- Long or unfamiliar government terminology.
- Privacy-sensitive content.
- Error recovery.
- Protection against accidental repeated submissions.

Only include considerations that apply to the component or its use case.
