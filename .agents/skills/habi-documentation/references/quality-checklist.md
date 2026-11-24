# Habi documentation quality checklist

Use this checklist when creating, reviewing, or updating a component page.

## Editorial quality

- [ ] The description explains what the component helps people do.
- [ ] The writing follows Habi's conversational, plain-language voice.
- [ ] Headings use sentence case.
- [ ] Terminology is consistent.
- [ ] Recommendations are specific and actionable.
- [ ] Examples use realistic government-service scenarios.
- [ ] There is no unnecessary repetition.
- [ ] Existing useful content has been preserved.

## Design guidance

- [ ] Appropriate use cases are explained.
- [ ] Inappropriate use cases have alternatives where relevant.
- [ ] Variants are accurately described.
- [ ] Relevant states and interactions are explained.
- [ ] Content guidelines are included where useful.
- [ ] Responsive behavior is documented where relevant.
- [ ] Related components are linked.

## Accessibility

- [ ] Keyboard behavior is documented where relevant.
- [ ] Focus behavior is explained.
- [ ] Accessible naming requirements are clear.
- [ ] Screen reader behavior is described accurately.
- [ ] Color contrast requirements are considered.
- [ ] Error identification and recovery are addressed.
- [ ] Developer responsibilities are distinguished from component-provided behavior.
- [ ] Accessibility claims are supported by testing or evidence.

## Developer documentation

- [ ] Installation instructions are accurate.
- [ ] Imports match actual exports.
- [ ] Code examples use supported APIs.
- [ ] Public props are verified against TypeScript definitions.
- [ ] Defaults and supported values are correct.
- [ ] Composition is explained where applicable.
- [ ] Controlled and uncontrolled behavior is documented where applicable.
- [ ] Dependencies and shared setup are not unnecessarily duplicated.

## Philippine context

- [ ] Examples are relevant to Philippine government services.
- [ ] Language is understandable.
- [ ] Mobile usability is considered.
- [ ] Low-connectivity scenarios are considered where relevant.
- [ ] Sensitive information is handled appropriately in examples.
- [ ] Localization and terminology are considered where relevant.

## Final validation

- [ ] Documentation follows the repository's existing conventions.
- [ ] Internal links work.
- [ ] Code examples have been checked.
- [ ] Relevant project checks have been run.
- [ ] Unverified details are clearly identified.
- [ ] No unrelated files or components were changed.

## Review outcome

Classify outstanding issues as:

- **Critical:** Incorrect implementation guidance, broken examples, or misleading accessibility claims.
- **Important:** Missing usage guidance, unclear interactions, or inaccurate recommendations.
- **Minor:** Wording, formatting, or consistency improvements.
- **Unverified:** Claims that require implementation inspection or accessibility testing.

Do not mark documentation complete while critical issues remain.
