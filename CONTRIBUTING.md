# Contributing to Habi

Thanks for helping with Habi. You can help by reporting bugs, fixing them, improving the docs, or building Habi for a framework other than React.

## Before you start

For anything bigger than a small fix, [open an issue](https://github.com/eligibilityy/habi/issues) first. That way you can agree on the approach before you spend time on it.

Habi is an independent project. It is not affiliated with the Government of the Philippines. Don't add government seals, logos or trademarks.

## Setting up

You'll need [Node.js 24](https://nodejs.org/) and [pnpm 10](https://pnpm.io/).

1. [Fork the repo](https://github.com/eligibilityy/habi/fork), then clone your fork.
2. Install and start the docs site:

   ```sh
   pnpm install
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Making a change

1. Create a branch in your fork, like `fix/select-focus` or `feat/svelte-button`.
2. Make your change.
3. Run `pnpm precommit`. It rebuilds the registry, formats, lints and type-checks, which is what CI checks.
4. Open a pull request against `main`. Say what you changed and why. Add screenshots for anything visual.

After you open it:

- **CI** runs the same checks as `pnpm precommit`. On your first pull request, a maintainer has to approve the run.
- **Vercel** builds a preview of the docs site. A maintainer has to authorize previews from forks, and the pull request can't merge until the preview passes.
- A maintainer reviews it and rebase-merges it. `main` keeps a straight history, so if your branch falls behind, rebase it on `main` rather than merging `main` in.

## Commit messages

Use [Conventional Commits](https://www.conventionalcommits.org/), with the component as the scope where there is one:

```
feat(select): add a grouped kind
fix(checkbox): keep the focus ring visible when checked
docs(button): explain when to use the subtle kind
feat(svelte): add Badge
```

Common types are `feat`, `fix`, `docs`, `refactor`, `style`, `test`, `build`, `ci` and `chore`. Give the pull request title the same format.

## How the repo is organized

| Folder or file                       | What it holds                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------ |
| `registry/habi/ui/`                  | React components                                                                     |
| `registry/habi/examples/`            | React examples, shown on the docs pages                                              |
| `registry/habi/styles/`              | Base styles and design tokens as CSS, shared by every framework                      |
| `registry/habi/lib/utils.ts`         | The `cn()` helper, shared by every framework                                         |
| `tokens/habi.tokens.json`            | Design tokens, shared with Figma                                                     |
| `content/docs/`                      | The docs site's pages                                                                |
| `design/SYNC.md`                     | How Figma and code stay in step, and the status of each component                    |
| `frameworks/`                        | Habi for other frameworks. Start with [`frameworks/README.md`](frameworks/README.md) |
| `.agents/skills/habi-documentation/` | How to write a docs page                                                             |

Some files are generated. Don't edit them by hand:

- `registry/habi/styles/habi-tokens.css`: run `pnpm tokens` after changing `tokens/habi.tokens.json`.
- `registry.json`, `registry/habi/examples/index.ts` and the install commands on docs pages: `pnpm registry` (and `pnpm dev`) rebuilds them.

## Building a component

- **Design comes from Figma.** Read [`design/SYNC.md`](design/SYNC.md) before you start. If the code has to differ from the Figma design, add an item to its Code → Figma list saying what and why.
- **React comes first.** A component is built in React, then in other frameworks. See [`frameworks/README.md`](frameworks/README.md).
- **Each component has three parts:** the component in `registry/habi/ui/`, at least one example in `registry/habi/examples/` (named `<component>-demo.tsx`), and a docs page in `content/docs/components/`.
- **Behavior comes from [Base UI](https://base-ui.com).** Use it for anything interactive, rather than writing focus handling or keyboard support yourself.
- **Styles are Tailwind classes that use Habi's tokens.** The style prop is called `kind`. Give each part a `data-slot` attribute, like `data-slot="card-title"`.
- **Components must be accessible.** They need to work with a keyboard and a screen reader, and meet WCAG 2 level AA.

## Writing docs

Follow the docs skill in [`.agents/skills/habi-documentation/SKILL.md`](.agents/skills/habi-documentation/SKILL.md) and its writing style guide. In short: use plain English and American spelling, and say "people" rather than "users".

## Using AI coding agents

You're welcome to use one. [`AGENTS.md`](AGENTS.md) and the docs skill are written so agents can follow them. You're still responsible for what's in your pull request, so read it all before you open it.

## License

Habi is licensed under the [MIT License](LICENSE). By contributing, you agree that your contributions are licensed under it too. Only contribute code you have the right to license that way.
