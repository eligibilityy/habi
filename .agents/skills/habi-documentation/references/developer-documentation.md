# Developer documentation

Use this guide when documenting Habi's React components and their implementation.

## Source of truth

Use the following sources, in order:

1. Actual component implementation.
2. Public TypeScript definitions and exports.
3. Existing working usage examples.
4. Project documentation and configuration.
5. External technical references.

External libraries can inform documentation, but they do not prove that Habi implements the same behavior.

## Installation

Document the dependencies and import instructions required by the component.

Use the actual package manager, package name, and import path from the repository.

Avoid repeating shared setup instructions. Shared setup lives on the Installation page (`content/docs/installation.mdx`): the Allo font, Habi's stylesheets, the `cn` helper, import paths, and the shared parts (status icon and field parts). Link to it, or to `/docs/installation#shared-parts` for form components.

On the component page, the `npm install` line lists only the packages the component's own file imports. Check them with the file's import statements, not by copying another page.

## Basic usage

Provide a minimal working example.

Requirements:

- Use actual exported components.
- Use valid prop names and values.
- Follow Habi's coding conventions.
- Use realistic content.
- Avoid unrelated application logic.
- Include required imports when appropriate.

Do not present pseudocode as working implementation code.

## Component composition

For compound components, explain how their subcomponents fit together.

Document:

- Required subcomponents.
- Optional subcomponents.
- Expected nesting.
- Composition restrictions.
- Available customization points.

Use the actual composition API.

Do not assume that Habi uses the same component structure as Base UI or shadcn/ui.

## API reference

Document public properties using a consistent table.

| Property | Type        | Default        | Description          |
| -------- | ----------- | -------------- | -------------------- |
| kind     | Actual type | Actual default | Explains its effect. |

In Habi's MDX, use `<PropsTable rows={[{ name, type, default?, required?, description }]} />`. Set `required: true` for props the TypeScript type doesn't mark optional.

For every property:

- Verify its name.
- Use its actual TypeScript type.
- Document its default when defined.
- Identify whether it is required.
- Explain its behavior.
- List supported values for unions or enums.
- Include relevant accessibility implications.

Do not invent defaults or document internal properties as public API.

Document callback parameters and return types when they are relevant to component usage.

## State management

When applicable, explain controlled and uncontrolled usage.

Document:

- State properties.
- Default state properties.
- Change callbacks.
- Whether the component manages state internally.
- How external state affects its behavior.

Include examples only when the component actually supports these patterns.

## Events and callbacks

Explain when each callback runs and what information it receives.

Do not merely list callback names.

For example, explain whether `onValueChange` runs when an option changes, whether it receives the new value, and whether it can be controlled externally.

Verify event behavior against the actual implementation.

## Accessibility implementation

Separate automatic component behavior from developer responsibilities.

**Component-provided behavior** may include:

- Semantic roles.
- Keyboard interaction.
- Focus management.
- Accessible state attributes.
- Screen reader relationships.

**Developer responsibilities** may include:

- Providing labels.
- Supplying accessible names.
- Connecting descriptions.
- Handling validation.
- Communicating asynchronous updates.

Document the actual behavior. Do not assume a component primitive automatically provides every accessibility requirement.

## Styling and customization

Document supported styling methods, such as:

- Design tokens.
- CSS variables.
- Variants.
- Class names.
- Slots.
- Data attributes.

Explain how to customize the component without breaking its design consistency or accessibility.

Do not recommend arbitrary CSS overrides when an established customization mechanism exists.

## Technical references

Use these references for implementation guidance:

- Base UI: https://base-ui.com/react
- shadcn/ui: https://ui.shadcn.com/docs

Use Base UI for interaction behavior, state management, composition, and accessibility implementation.

Use shadcn/ui for installation examples, component usage, API presentation, and practical code examples.

Verify external API documentation against the version actually installed in Habi.

## Code verification

Before publishing:

- Check imports and exports.
- Verify prop names and types.
- Confirm dependencies.
- Validate JSX and TypeScript.
- Run relevant project checks when available.
- Confirm examples reflect actual component behavior.

Never say code was tested if it was only inspected.
