![Habi: a design system for Philippine government services](./Cover.jpg)

<p align="center">
  <a href="https://habi.yiliya.studio">Website</a> ·
  <a href="https://www.figma.com/design/D3nJzUeqpGlyMpimlesib6">Figma</a> ·
  <a href="https://habi.yiliya.studio/docs/installation">Get started</a>
</p>

Habi is a design system for digital government services in the Philippines.

It brings together a collection of reusable components, design guidelines, and documentation to help make government websites and services easier to use, more accessible, and more consistent.

Habi includes a Figma library and React components built around the same design tokens, so designs and code stay in sync.

> [!IMPORTANT]
> Habi is an independent design project. It is not affiliated with or endorsed by the Government of the Philippines.

## Project status

Habi is still a work in progress. Some components are ready to use, while others are still being designed and are marked **Planned** on the website.

You can follow the project's progress in [`design/SYNC.md`](./design/SYNC.md).

## Getting started

Habi components are copied into your project rather than installed as a package. This means you can use them as a starting point and modify the code to fit your needs.

To get started, follow the [installation guide](https://habi.yiliya.studio/docs/installation).

Habi is built with React, Base UI, and Tailwind CSS. Versions for other frameworks, starting with Svelte, are on the way. See [`frameworks/README.md`](./frameworks/README.md).

## What's inside

- `registry/habi/ui/` — React components
- `registry/habi/styles/` — Design tokens and base styles
- `registry/habi/examples/` — Component examples
- `tokens/` — Design tokens shared with Figma
- `content/docs/` — Documentation
- `design/SYNC.md` — Figma and code progress
- `frameworks/` — Habi for frameworks other than React

## Contributing

Contributions are welcome, including versions of Habi for other frameworks. Read [`CONTRIBUTING.md`](./CONTRIBUTING.md) to get started.

## Running locally

You'll need [Node.js 24](https://nodejs.org/) and [pnpm 10](https://pnpm.io/).

```sh
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Feedback

Found a problem or have an idea? [Open an issue](https://github.com/eligibilityy/habi/issues).

## License

Habi's code is licensed under the [MIT License](./LICENSE).

It uses the [Allo typeface](https://allo.joshpuckett.me) (SIL Open Font License 1.1) and [Heroicons](https://heroicons.com) (MIT).

Habi does not include government seals, logos, or trademarks. If you use it for a real government service, use the relevant agency's official branding. Only use the Official banner on a real `.gov.ph` website.
