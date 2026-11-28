# Habi in other frameworks

This guide is for developers who want to bring Habi to other frameworks.

**Status:** React is currently the only available implementation. Some of the setup described here is still planned. See [Planned changes](#planned-changes).

Before contributing, read [`CONTRIBUTING.md`](../CONTRIBUTING.md) for instructions on setting up the repository and opening a pull request.

## How it works

Every framework shares the same design tokens and styles, but has its own components and interaction logic.

**Shared across frameworks:**

- **Tokens and base styles:** `registry/habi/styles/habi-tokens.css` (generated from `tokens/habi.tokens.json`) and `registry/habi/styles/habi.css`.
- **The `cn()` helper:** `registry/habi/lib/utils.ts`. It's a TypeScript utility built on `clsx` and `tailwind-merge`.
- **Class strings:** Components use the same Tailwind classes in every framework. The plan is to move these into `registry/habi/variants/<component>.ts` so implementations can import them. Until then, copy them from the React components exactly.

**Built separately for each framework:**

- **Components:** Each framework has its own markup and interaction logic. You can use a headless library that works with your framework, such as [Bits UI](https://bits-ui.com) for Svelte, [Reka UI](https://reka-ui.com) for Vue, or [Ark UI](https://ark-ui.com) for multiple frameworks. You can also build components without a headless library.
- **Examples:** Each implementation should have examples that demonstrate the same features and interactions as the React examples.

The goal is for Habi components to look and behave consistently, regardless of the framework they're built with.

## Contract

The Habi specification is the source of truth. It defines how components should look, behave, and work. For now, a component's specification is its [docs page](https://habi.yiliya.studio/docs) and its design in the [Habi Figma file](https://www.figma.com/design/D3nJzUeqpGlyMpimlesib6), together with the contract on this page.

The React implementation is currently the reference implementation. Use it to understand how components are built, but follow the Habi specification when deciding how a component should work.

If something in the specification and React implementation doesn't match, open an issue so it can be reviewed.

### Parts

Use the same `data-slot` values as the React implementation for each component part.

For example, a card title uses `data-slot="card-title"`.

You can find the existing values in the React components under `registry/habi/ui/`.

### States

Habi uses `data-*` attributes to style component states. These attributes are part of Habi's styling contract.

Use the same attributes on the same elements across frameworks, even if your headless library uses different names for those states.

A state attribute should be **present with an empty value when true, and absent when false**.

For example, add `data-disabled` when the component is disabled, and leave it off when it isn't. Don't write `data-disabled="false"`: Tailwind's `data-disabled:` variant matches the attribute whatever its value, so the component would look disabled.

Most frameworks let you leave an attribute out when its value is `undefined`.

| Attribute             | Set when                                                                         | Used by                                                                                      |
| --------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data-disabled`       | The component is disabled                                                        | Button, Checkbox, Radio group, Text input, Date input, OTP input, Select, Search, Tag, Field |
| `data-invalid`        | The value fails validation                                                       | Text input, Checkbox, Radio group, OTP input, Select, Search, File input                     |
| `data-checked`        | A checkbox or radio is checked                                                   | Checkbox, Radio group                                                                        |
| `data-indeterminate`  | A checkbox is partly checked                                                     | Checkbox                                                                                     |
| `data-pressed`        | A tag is switched on                                                             | Tag                                                                                          |
| `data-panel-open`     | The panel controlled by a trigger is open                                        | Accordion, Official banner                                                                   |
| `data-popup-open`     | The list controlled by a trigger is open                                         | Select                                                                                       |
| `data-highlighted`    | An option has keyboard or pointer focus                                          | Select, Search                                                                               |
| `data-selected`       | An option is selected                                                            | Select                                                                                       |
| `data-placeholder`    | No option is selected, so the placeholder is shown                               | Select                                                                                       |
| `data-dragging`       | A file is dragged over the drop zone                                             | File input                                                                                   |
| `data-side`           | Which side of its trigger a popup opened on: `top`, `right`, `bottom`, or `left` | Tooltip                                                                                      |
| `data-instant`        | A tooltip opened without its usual delay                                         | Tooltip                                                                                      |
| `data-starting-style` | A part is opening                                                                | Accordion, Official banner, Modal, Select, Search, Tooltip                                   |
| `data-ending-style`   | A part is closing                                                                | Accordion, Official banner, Modal, Select, Search, Tooltip                                   |

Some styles depend on an attribute being set on a parent element. For example, an accordion icon might use `group-data-panel-open:rotate-180`.

Make sure these attributes are placed on the same elements as in the React implementation. Component documentation will show them too, once each page has a **Parts and states** section.

These attributes are only used for styling. They don't replace ARIA attributes, roles, or keyboard interactions.

### Opening and closing

Panels, modals, and popups use CSS transitions for their opening and closing animations.

The expected behavior is:

1. **When opening:** Add the part to the page with `data-starting-style`. Remove the attribute on the next frame so it transitions into its normal style.
2. **When closing:** Add `data-ending-style`. Keep the part on the page until its exit animation finishes, then remove it.

Use Habi's CSS transitions and timing rather than introducing different framework-specific animations.

Make sure closing still works when animations are disabled, canceled, or unavailable. This is especially important for users who prefer reduced motion. Don't rely only on `transitionend`, since that event may never fire when transitions are disabled.

The exact implementation is up to the framework, as long as the behavior stays consistent.

### CSS variables

Some components use CSS variables for sizing and positioning. These are currently set by Base UI in the React implementation.

Other implementations should provide the same values on the appropriate elements.

| Variable                     | Purpose                                               | Used by         |
| ---------------------------- | ----------------------------------------------------- | --------------- |
| `--accordion-panel-height`   | Height of the panel content for its opening animation | Accordion       |
| `--collapsible-panel-height` | Height of the collapsible panel content               | Official banner |
| `--anchor-width`             | Width of the trigger, used to size the popup          | Select, Search  |
| `--available-width`          | Available space beside the trigger                    | Select, Search  |
| `--available-height`         | Available space above or below the trigger            | Select, Search  |
| `--transform-origin`         | Point where the popup's animation originates          | Tooltip         |

### Component APIs

Keep component features and available options consistent across frameworks.

**Use the same prop names and values as React.** The style prop is called `kind`, with the same values in every implementation. Other props, such as `iconOnly`, keep their React names too. This lets the shared class strings, the docs' props tables, and people moving between frameworks all rely on the same names.

**Follow your framework's conventions for events, two-way binding, and content.** For example, React uses `checked` with an `onCheckedChange` handler. A Svelte implementation could use `bind:checked` instead, and snippets instead of `children`.

The goal is to provide the same features and a familiar Habi experience without forcing every framework to work like React.

### Accessibility

All implementations should meet the accessibility requirements documented for each component.

This includes:

- Appropriate ARIA attributes and roles
- Accessible names and labels
- Keyboard interactions
- Correct focus behavior
- Support for disabled and invalid states

Each component's documentation describes its requirements under **Accessibility** and **Keyboard interaction**.

### Icons

Use the same [Heroicons](https://heroicons.com) icon, style, and size as the React implementation.

For example, React currently uses packages such as `@heroicons/react/20/solid`.

If your framework doesn't have an official Heroicons package, you can use the SVG inline instead.

Heroicons is MIT licensed.

Icons may change: a move to a larger icon set is planned. See [`ROADMAP.md`](../ROADMAP.md).

### Examples

For every example in `registry/habi/examples/`, provide an equivalent example in your framework implementation.

Examples should demonstrate the same components, variants, states, and interactions. The code doesn't need to be identical, follow your framework's conventions.

This makes it easier to compare implementations and check that they behave consistently.

## Adding a framework

If you want to contribute a new framework implementation:

1. **Open an issue first.** This gives us a chance to discuss the approach, folder structure, and tooling before work begins.
2. **Give it its own folder.** Use a structure like `frameworks/<framework>/`. Each implementation should have its own `package.json`, components, examples, type-checking, and a small preview app.
3. **Set up its own registry.** Each framework can have its own registry endpoint, such as `/r/<framework>/<component>.json`. The registry should follow the format supported by its installation tooling. React keeps its existing `/r/<component>.json` endpoint.
4. **Start with simpler components.** Components that don't use Base UI are a good starting point because they're mostly markup and styling.

Some good components to start with:

- Back link
- Badge
- Breadcrumb
- Card
- Details
- Inset text
- Link
- Notification
- Phase banner
- Skip link
- Spinner
- Status icon
- Warning text

### When is a component complete?

A component implementation is ready when:

- It follows the Habi component specification
- It uses the required `data-slot` and `data-*` attributes
- It meets the documented accessibility and keyboard interaction requirements
- Its appearance and behavior are consistent with Habi
- It has equivalent examples for the available React examples
- Type-checking and relevant CI checks pass
- It's marked Built in its framework's column in [`ROADMAP.md`](../ROADMAP.md)

### Implementation status

Each framework implementation has a status and a maintainer, listed in [`ROADMAP.md`](../ROADMAP.md).

The status shows how far along it is:

| Status       | Meaning                                                |
| ------------ | ------------------------------------------------------ |
| Planned      | No implementation yet                                  |
| Experimental | Work is in progress, and components may change         |
| Partial      | Some components are ready to use                       |
| Available    | Every built React component has a ready-to-use version |

The maintainer is the person actively looking after the implementation. An implementation doesn't automatically become officially maintained just because it has been contributed. If nobody is looking after it, its maintainer is listed as "None".

## Planned changes

These are the things that will make it easier to support more frameworks:

- [ ] Move component class strings into `registry/habi/variants/` so implementations can reuse them.
- [ ] Set up a registry for each framework and add a framework switcher to the docs' install and code sections.
- [ ] Set up the first framework implementation with its own folder, preview app, type-checking, and CI.
- [ ] Add checks to compare examples across implementations.
- [ ] Add a **Parts and states** section to each component's documentation.
- [ ] Add each framework's status, maintainer, and a column for its components to `ROADMAP.md`.
