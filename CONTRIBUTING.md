# Contributing to Habi

Hey! Thanks for checking out Habi. You can contribute by reporting bugs, fixing them with pull requests, improving the docs, or implementing Habi in different frameworks.

## Before you start

Currently, contributing is only for the development side of Habi. I plan on creating documentation for the design principles soon, if that's what you want to work on.

For anything bigger than a small fix, [open an issue](https://github.com/eligibilityy/habi/issues) first. That way you can agree on the approach before you spend time on it.

Habi is an independent project. It is not affiliated with the Government of the Philippines. Don't add official government seals, logos or trademarks.

## Setting up

### Prerequisites

- [Node.js 24](https://nodejs.org/)
- [pnpm 10](https://pnpm.io/)

### Local development

1. Fork the repository and then clone the fork.

2. Install and start the docs site:

   ```sh
   pnpm install
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Making a change

1. Create a branch for your change.
2. Run `pnpm precommit`. This will rebuild the registry, then format, lint and type-check the code.
3. Open a PR against `main` with your changes, and link any issue the PR resolves or addresses. Add screenshots for anything visual.

The maintainer will review the PR once they are able to. Patience is key! ;;

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/), with the component as the scope where there is one:

```
feat(select): add a grouped kind
fix(checkbox): keep the focus ring visible when checked
docs(button): explain when to use the subtle kind
feat(textarea): add Textarea
```

## Quick find

| Folder or file                       | Description                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| `registry/habi/ui/`                  | React components                                                                     |
| `registry/habi/examples/`            | React examples                                                                       |
| `registry/habi/styles/`              | Base styles and design tokens as CSS                                                 |
| `registry/habi/lib/utils.ts`         | `cn()` helper                                                                        |
| `tokens/habi.tokens.json`            | Design tokens                                                                        |
| `content/docs/`                      | Documentation site pages                                                             |
| `ROADMAP.md`                         | Which components are built and which are planned                                     |
| `frameworks/`                        | Habi for other frameworks. Start with [`frameworks/README.md`](frameworks/README.md) |
| `.agents/skills/habi-documentation/` | How to write a docs page                                                             |

Some files are generated, don't edit these by hand:

- `registry/habi/styles/habi-tokens.css`
  - This file is built from `tokens/habi.tokens.json` and is generated when you run `pnpm tokens`
- `registry.json`, `registry/habi/examples/index.ts` and the install commands on docs pages
  - Rebuilt whenever you run `pnpm registry` or `pnpm dev`

## Building a component

Keep these guidelines in mind when creating a new Habi component:

- **Follow the design.** Each component is designed in the [Habi Figma file](https://www.figma.com/design/D3nJzUeqpGlyMpimlesib6) first. If your implementation has to differ from it, say what changed and why in your pull request.
- **Update the roadmap.** When a component is built, change its status in [`ROADMAP.md`](ROADMAP.md) to Built and link it to its docs page.
- **Start with React.** Build the React version first, then adapt it for other frameworks. See [`frameworks/README.md`](frameworks/README.md).
- **Include all three parts.** Every component needs an implementation in `registry/habi/ui/`, a demo in `registry/habi/examples/` (`<component>-demo.tsx`), and a docs page in `content/docs/components/`.
- **Use Base UI for behavior.** Rely on [Base UI](https://base-ui.com) for interactive features like focus management and keyboard support.
- **Follow Habi's styling conventions.** Use Tailwind classes with Habi's tokens, `kind` for variants, and `data-slot` attributes for component parts.
- **Keep accessibility in mind.** Components must support keyboard and screen reader use and meet WCAG 2.2 Level AA.

## Writing docs

Follow the docs skill in [`.agents/skills/habi-documentation/SKILL.md`](.agents/skills/habi-documentation/SKILL.md) and its writing style guide.

## Using AI coding agents

You're welcome to use one. [`AGENTS.md`](AGENTS.md) and the docs skill are written so agents can follow them. You're still responsible for what's in your pull request, so read it all before you open it.

## License

Habi is licensed under the [MIT License](LICENSE). By contributing, you agree that your contributions are licensed under it too.
