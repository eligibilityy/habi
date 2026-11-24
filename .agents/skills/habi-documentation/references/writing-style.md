# Habi writing style

This guide defines the editorial voice and conventions for Habi component documentation.

## Voice and tone

Habi should sound:

- Clear and conversational.
- Professional without being overly formal.
- Friendly without being overly casual.
- Practical and instructional.
- Inclusive and respectful.

Write for designers, developers, and service teams with different levels of experience.

Use plain English. Prefer familiar words over technical jargon. Explain technical terms when they are necessary.

## Sentence construction

Prefer short, direct sentences.

Use active voice and address readers directly when giving instructions.

Prefer:

> Use a radio group when people need to compare a small number of options.

Avoid:

> A radio group should be utilized in situations where users are required to select from a limited set of available options.

Keep component descriptions to one sentence where possible.

A useful pattern is:

> [Component] lets people [accomplish something].

Examples:

- Button: Lets people take an action, like submitting a form or starting a task.
- Link: Takes people to another page, or to another part of the same page.
- Text input: Lets people enter a single line of text, like a name or email address.

Do not force this pattern when another sentence sounds more natural.

## Terminology

Use consistent terms throughout Habi.

| Prefer     | Avoid mixing with                                               |
| ---------- | --------------------------------------------------------------- |
| People     | Users, visitors, customers (unless context requires them)       |
| Component  | Element, control, widget                                        |
| Text input | Input box, text field                                           |
| Select     | Dropdown, dropdown menu                                         |
| Focus      | Active state (when referring to keyboard focus)                 |
| Disabled   | Inactive, unavailable (unless describing a different condition) |
| Kind       | Variant, type (Habi's style prop is `kind`)                     |
| Hint       | Helper text, help text (the prop is still `description`)        |
| Required   | Mandatory, compulsory                                           |
| Color      | Colour (Habi uses American spelling)                            |

Write sizes with a multiplication sign: "24 × 24px", not "24 x 24px".

Follow the actual component name used by Habi, even when other design systems use different terminology.

Use "people" when discussing the people accessing government services. Use "developers" and "designers" when referring to implementation audiences.

## Headings and formatting

Use sentence case.

Good:

- When to use
- Content guidelines
- Keyboard interaction
- Accessibility

Avoid:

- When To Use
- Content Guidelines
- Keyboard Interaction
- Accessibility Considerations

Use short paragraphs, descriptive lists, and tables when they make information easier to scan.

Follow the repository's existing MDX formatting and heading hierarchy.

## Recommendations

Explain why a recommendation matters.

Prefer:

> Use a link when someone needs to navigate to another page. Use a button when they need to perform an action.

Avoid:

> Always use buttons for interactions.

Do not turn contextual recommendations into universal rules.

For example, the appropriate selection component depends on more than the number of options. Consider label length, screen space, whether people need to compare options, and the task itself.

## Examples

Use realistic examples from Philippine government services:

- Applying for an NBI clearance.
- Booking a passport appointment.
- Registering for a government service.
- Updating personal information.
- Checking an application status.
- Paying a government fee.
- Applying for benefits.
- Requesting official documents.

Use fictional names and information.

Avoid generic placeholder examples when a realistic example would explain the component better.

## Philippine language considerations

Use English as the default documentation language.

Include Filipino examples when they help explain content decisions or demonstrate localized usage.

Consider:

- Familiar Filipino terms.
- Common administrative terminology.
- Clear instructions.
- Consistent translations.
- Regional language needs.

Do not invent translations of legal, administrative, or official government terminology. Verify accepted terminology before recommending it.

## Avoid

- Marketing language and exaggerated claims.
- Unnecessary introductions.
- Repeating the same explanation in multiple sections.
- Unexplained technical jargon.
- Arbitrary numerical rules.
- Absolute accessibility claims without testing.
- Overly formal or academic phrasing.

## Editing existing content

Do not rewrite content simply to make it sound different.

Preserve sentences that are already clear and accurate. Make changes when they improve clarity, precision, consistency, or usefulness.

Habi's writing should remain recognizable across all component pages.
