# Habi in other frameworks

Habi's components are built in React first. This folder is where versions for other frameworks live.

**Status:** there are no other frameworks yet. Svelte is the first one being worked on. Some of the setup below is still being built; [In progress](#in-progress) lists what's coming.

Read [`CONTRIBUTING.md`](../CONTRIBUTING.md) first for how to set up the repo and open a pull request.

## How it works

Every framework uses the same styles. Each framework writes its own markup and behavior.

**Shared by every framework:**

- **Tokens and base styles:** `registry/habi/styles/habi-tokens.css` (generated from `tokens/habi.tokens.json`) and `registry/habi/styles/habi.css`.
- **The `cn()` helper:** `registry/habi/lib/utils.ts`. It's plain TypeScript, built on `clsx` and `tailwind-merge`.
- **Class strings:** each component's Tailwind classes. These are moving into `registry/habi/variants/<component>.ts`, so every framework can import them. Until then, copy them from the React file exactly.

**Written for each framework:**

- **Markup and behavior**, using a headless library for that framework. For Svelte, that's [Bits UI](https://bits-ui.com). It plays the same role as [Base UI](https://base-ui.com) in React.
- **Examples** that match the React examples.

Because the styles are shared, a component should look the same in every framework. That only works if every framework produces the same HTML attributes for the styles to target. The contract below says what those are.

## The contract

React is the source of truth. If this page and the React file disagree, follow the React file and open an issue so this page can be fixed.

### Parts

Give each part of a component the same `data-slot` value as the React version, like `data-slot="card-title"`. Find them in the React file in `registry/habi/ui/`.

### States

Habi's styles react to `data-*` attributes. Habi uses [Base UI's](https://base-ui.com) names for them, so your version must set the same attributes, even if your headless library calls them something else.

A state attribute is **present (with an empty value) when it's true, and absent when it's false**. Never write `data-disabled="false"`: Tailwind's `data-disabled:` matches any element that has the attribute, whatever its value. In Svelte, write `data-disabled={disabled || undefined}`.

| Attribute                                  | Set when                                                                        | Used by                                                                                      |
| ------------------------------------------ | ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `data-disabled`                            | The component is disabled                                                       | Button, Checkbox, Radio group, Text input, Date input, OTP input, Select, Search, Tag, Field |
| `data-invalid`                             | The value fails validation                                                      | Text input, Checkbox, Radio group, OTP input, Select, Search, File input                     |
| `data-checked`                             | A checkbox or radio is checked                                                  | Checkbox, Radio group                                                                        |
| `data-indeterminate`                       | A checkbox is partly checked                                                    | Checkbox                                                                                     |
| `data-pressed`                             | A tag is switched on                                                            | Tag                                                                                          |
| `data-panel-open`                          | The panel a trigger controls is open                                            | Accordion, Official banner                                                                   |
| `data-popup-open`                          | The list a trigger controls is open                                             | Select                                                                                       |
| `data-highlighted`                         | An option has keyboard or pointer focus                                         | Select, Search                                                                               |
| `data-selected`                            | An option is the chosen one                                                     | Select                                                                                       |
| `data-placeholder`                         | No option is chosen, so the placeholder shows                                   | Select                                                                                       |
| `data-dragging`                            | A file is dragged over the drop zone                                            | File input                                                                                   |
| `data-side`                                | Which side of its trigger a popup opened on: `top`, `right`, `bottom` or `left` | Tooltip                                                                                      |
| `data-instant`                             | A tooltip opened without its usual delay                                        | Tooltip                                                                                      |
| `data-starting-style`, `data-ending-style` | A part is opening or closing. See [Opening and closing](#opening-and-closing)   | Accordion, Official banner, Modal, Select, Search, Tooltip                                   |

Some styles are on the parent, like `group-data-panel-open:rotate-180` on an accordion's icon. Put the attribute on the same element React does.

These attributes are only for styling. You still need the same ARIA attributes, roles and keyboard support as the React version.

### Opening and closing

Panels, modals and popups animate with CSS transitions, using Base UI's approach:

1. **When it opens,** the part is added to the page with `data-starting-style`. On the next frame, remove the attribute, so the part transitions from its starting style to its normal style.
2. **When it closes,** add `data-ending-style`. Keep the part on the page until its transitions finish, then remove it.

To know when transitions have finished, wait for `element.getAnimations()` to settle. Don't wait for `transitionend`: when someone has reduced motion turned on, Habi's `motion-safe:` classes switch the transitions off, `transitionend` never fires, and the part would never close.

Use this rather than your framework's own transitions, so the timing and easing stay in Habi's CSS.

### CSS variables

Some styles use CSS variables that Base UI sets. Set them on the same element:

| Variable                     | Holds                                                     | Used by         |
| ---------------------------- | --------------------------------------------------------- | --------------- |
| `--accordion-panel-height`   | The height of the panel's content, for the open animation | Accordion       |
| `--collapsible-panel-height` | The same, for a collapsible panel                         | Official banner |
| `--anchor-width`             | The width of the trigger, so the list can match it        | Select, Search  |
| `--available-width`          | Space left in the window beside the trigger               | Select, Search  |
| `--available-height`         | Space left in the window above or below the trigger       | Select, Search  |
| `--transform-origin`         | The point on the trigger the popup grows from             | Tooltip         |

### Props

Use the same prop names and values as React. The style prop is `kind`, with the same values. Other props, like `iconOnly`, keep their React names too.

Follow your framework's own habits for events, two-way binding and content. In Svelte, for example, use `bind:checked` instead of `checked` with `onCheckedChange`, and snippets instead of `children`.

### Accessibility

Match the React version's roles, labels and keyboard behavior. Each component's docs page describes them under **Accessibility** and **Keyboard interaction**.

### Icons

Use the same [Heroicons](https://heroicons.com) icon, style and size as the React file, like `@heroicons/react/20/solid`. If there's no official Heroicons package for your framework, paste the SVG inline. Heroicons is MIT licensed.

### Examples

For each React example in `registry/habi/examples/`, add one with the same name and content. A check that compares the two is coming.

## Adding a framework

1. **Open an issue first,** so the folder layout and tooling can be agreed.
2. **Give the framework its own folder,** like `frameworks/svelte/`. It's a pnpm workspace package with its own `package.json`, its own type-checking, its components and examples, and a small preview app that renders the examples.
3. **Publish its own registry.** Each framework's components are served at `/r/<framework>/<component>.json`, built with that framework's shadcn CLI: [shadcn-svelte](https://shadcn-svelte.com/docs/registry) for Svelte, or [shadcn-vue](https://shadcn-vue.com/docs/registry) for Vue. React stays at `/r/<component>.json`.
4. **Start with the components that don't use Base UI.** They're mostly markup and port quickly: Back link, Badge, Breadcrumb, Card, Details, Inset text, Link, Notification, Phase banner, Skip link, Spinner, Status icon and Warning text.

A component is done when:

- It meets the contract above.
- It has an example for each React example.
- Type-checking and CI pass.
- Its row in [`design/SYNC.md`](../design/SYNC.md) is updated.

## In progress

These changes are coming in separate pull requests:

- [ ] Move each component's class strings into `registry/habi/variants/`, so every framework imports the same ones.
- [ ] Build a registry for each framework, and add a framework switcher to the docs' install and code sections.
- [ ] Set up `frameworks/svelte/`, with its preview app, type-checking in CI, and a check that compares each Svelte example with its React version.
- [ ] Add a **Parts and states** table to each component's docs page.
