---
name: habi-documentation
description: Writes, reviews, and improves component documentation for Habi, a design system for Philippine government digital services. Use when creating component pages, editing existing documentation, reviewing design or developer guidance, documenting React component APIs, or checking consistency across Habi.
---

# Documenting Habi components

Write and maintain clear, practical, consistent component documentation for Habi.

Habi is a design system for Philippine government digital services. Its documentation helps designers, developers, and service teams build services that people can understand and use.

## Core principles

1. **Follow Habi's existing conventions.** Read existing component pages before creating or changing documentation. Preserve its voice, structure, terminology, and MDX conventions.
2. **Write for people, not just developers.** Explain what a component helps people do and when to use it before discussing implementation details.
3. **Be concise and specific.** Prefer short explanations, realistic examples, and actionable recommendations.
4. **Document actual behavior.** Treat source code, TypeScript definitions, and verified examples as the source of truth. Never invent features, props, defaults, or accessibility guarantees.
5. **Use judgment.** Component pages do not need identical sections. Include only information relevant to understanding and implementing that component.
6. **Treat accessibility as a requirement.** Explain component behavior and developer responsibilities separately.
7. **Consider the Philippine context.** Use realistic government-service examples and account for mobile devices, language, connectivity, and accessibility.

## Reference files

Read the relevant reference files before writing or reviewing documentation:

- [Writing style](references/writing-style.md): voice, terminology, and editorial conventions.
- [Component documentation](references/component-documentation.md): content structure, usage guidance, states, and examples.
- [Developer documentation](references/developer-documentation.md): installation, React APIs, composition, and accessibility implementation.
- [Quality checklist](references/quality-checklist.md): final review and validation.

Read only the references needed for the task. Always consult the quality checklist before finishing.

## Workflow

### 1. Inspect the project

Before making changes:

- Identify the documentation framework and folder structure.
- Read at least two existing component pages.
- Inspect shared MDX components and frontmatter conventions.
- Locate the component implementation, exports, and TypeScript definitions.
- Check related components and existing installation instructions.

Do not assume the project uses a particular package, component primitive, or documentation format. Verify the repository.

### 2. Understand the component

Identify:

- Its purpose and intended user need.
- When it should and should not be used.
- Its anatomy and variants.
- Supported states and interaction behavior.
- Content requirements.
- Accessibility behavior.
- Public developer API.
- Known limitations.

Separate verified implementation details from design recommendations.

### 3. Research when useful

Use established design systems as references for editorial and implementation decisions:

**Government design systems**

- USWDS: https://designsystem.digital.gov/
- MYDS: https://design.digital.gov.my/en/docs
- GOV.UK: https://design-system.service.gov.uk/
- Government of Canada: https://design-system.canada.ca/

**Technical references**

- shadcn/ui: https://ui.shadcn.com/docs
- Base UI: https://base-ui.com/react

Use government systems to inform component guidance, content, and accessibility recommendations. Use shadcn/ui and Base UI to inform implementation documentation.

Research comparable components when documenting a new component, resolving uncertainty, or reviewing a recommendation. Do not browse every reference for routine copy edits.

Never copy another design system's documentation or assume its behavior matches Habi.

### 4. Write or revise

Follow the guidance in the relevant reference files.

When creating a page, use Habi's existing component documentation conventions as the default structure.

When editing an existing page:

- Preserve useful content.
- Make targeted improvements.
- Avoid rewriting sections that already work.
- Preserve valid examples and working code.
- Do not introduce unrelated changes.

### 5. Verify

Check every technical statement against the implementation.

Verify:

- Component names and imports.
- Public props, types, and defaults.
- Supported variants and states.
- Code examples and dependencies.
- Keyboard and focus behavior.
- Accessibility claims.
- Internal links and documentation references.

Run available project checks when appropriate, such as type checking, linting, builds, or documentation validation.

Do not claim that an example was tested unless it was actually tested.

### 6. Review

Read the finished page as a designer, developer, and government service team member.

Ask:

- Can someone understand when to use this component?
- Can someone recognize when another component is more appropriate?
- Are its interaction and accessibility requirements clear?
- Can a developer implement it without guessing?
- Does the page sound like the rest of Habi?

Use the quality checklist and revise any issues found.

## Decision rules

- Existing Habi conventions take priority over generic templates.
- Actual implementation takes priority over assumptions and external references.
- Accessibility requirements take priority over visual convenience.
- User needs take priority over implementation preferences.
- Recommendations should explain their reasoning, not impose arbitrary rules.
- Missing information must be identified, not fabricated.

## Output expectations

Produce ready-to-publish documentation in the repository's existing format.

When reviewing documentation, distinguish:

- Writing and editorial issues.
- Design guidance issues.
- Technical inaccuracies.
- Accessibility issues.
- Missing information.

When making changes, summarize what changed and flag anything that still requires verification.

The goal is not to make every page longer. It is to make every Habi component easier to understand, choose, implement, and use correctly.
