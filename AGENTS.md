# Fumadocs

This site is built with [Fumadocs](https://fumadocs.dev) on Next.js. The APIs and conventions of Fumadocs may differ from your training data, so check its docs for the task at hand:

- Writing pages: https://fumadocs.dev/docs/next/markdown.md
- Organizing pages and folders: https://fumadocs.dev/docs/next/page-conventions.md
- Customizing the UI: https://fumadocs.dev/docs/next/guides/customize-ui.md
- Changing the theme and colors: https://fumadocs.dev/docs/ui/theme.md
- Upgrading Fumadocs: https://fumadocs.dev/docs/next/upgrade.md
- Other tasks: https://fumadocs.dev/llms.txt lists every docs page.

# Documentation

When writing, editing or reviewing a docs page, follow the Habi documentation skill in `skills/habi-documentation/SKILL.md` and the reference files it lists.

# Design sync

The Figma file is designed by a separate agent (Claude desktop with the Figma connector). Before building a component, read the Figma file's Changelog page and any comments on the component. When code has to differ from Figma, say what and why in the PR description. When a PR merges, mark the component Built in `ROADMAP.md`.
