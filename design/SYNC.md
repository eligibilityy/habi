# Design ↔ code sync

How the Figma file and the code stay in step. Two agents use this file:

- **The code agent** (Claude Code, in this repo) builds components, demos and docs pages.
- **The Figma agent** (Claude desktop, with the Figma connector) designs in the [Habi Figma file](https://www.figma.com/design/D3nJzUeqpGlyMpimlesib6).

Last updated 2026-11-25.

## Where everything lives

| What                      | Where                                                                                                                                                                                | Who writes it |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| Designs and descriptions  | [Habi Figma file](https://www.figma.com/design/D3nJzUeqpGlyMpimlesib6)                                                                                                               | Figma agent   |
| Design changes for code   | The **Changelog** page in the Figma file                                                                                                                                             | Figma agent   |
| Code decisions and status | This file. Raw: `https://raw.githubusercontent.com/eligibilityy/habi/main/design/SYNC.md`                                                                                            | Code agent    |
| How each component works  | The docs: [habi.yiliya.studio](https://habi.yiliya.studio). For agents: [/llms.txt](https://habi.yiliya.studio/llms.txt), [/llms-full.txt](https://habi.yiliya.studio/llms-full.txt) | Code agent    |
| Questions about one node  | Figma comments on that node                                                                                                                                                          | Both          |

The Figma agent can't push to this repo, so it never edits this file. Its changes go on the Figma Changelog page, and the code agent copies them into [Figma → code](#figma--code) below.

## The routine

### Code agent

1. **Before building a component:** read the Figma Changelog page and any comments on the component. Copy new entries into [Figma → code](#figma--code).
2. **While building:** when code has to differ from Figma, add an item to [Code → Figma](#code--figma) saying what and why.
3. **When the PR merges:** update [Component status](#component-status), tick off the Figma → code items it covered, and tick Code → Figma items the Changelog says are done.

### Figma agent

1. **Before a design session:** read this file (the raw link above) and do the open items in [Code → Figma](#code--figma) that you agree with. Disagree by commenting on the node in Figma.
2. **For a component that's already built:** read its docs page first (`https://habi.yiliya.studio/docs/components/<name>`), so a design change doesn't undo a code decision without saying so.
3. **After any change code needs to know about:** add an entry to the Figma Changelog page:

   ```
   2026-11-25 · Accordion (38:15)
   Change: Added a Small size, 48px heading row.
   Code impact: New `size` variant.
   ```

   Log new components, new or renamed variants and properties, changed measurements or tokens, and new usage rules. Skip changes code doesn't see, like reordering layers.

4. **When you finish a Code → Figma item:** add a Changelog entry starting with `Done:` and the item's text, so the code agent can tick it off.

## Component status

Node IDs are component sets unless marked _(component)_. v1 is every component page in the Figma file except Header and Footer: 46 components.

### Built (18 of 46)

| Component    | Figma node | Code                                | Docs                                                                    |
| ------------ | ---------- | ----------------------------------- | ----------------------------------------------------------------------- |
| Accordion    | `38:15`    | `registry/habi/ui/accordion.tsx`    | [accordion](https://habi.yiliya.studio/docs/components/accordion)       |
| Button       | `4:28`     | `registry/habi/ui/button.tsx`       | [button](https://habi.yiliya.studio/docs/components/button)             |
| Link         | `39:35`    | `registry/habi/ui/link.tsx`         | [link](https://habi.yiliya.studio/docs/components/link)                 |
| Badge        | `122:47`   | `registry/habi/ui/badge.tsx`        | [badge](https://habi.yiliya.studio/docs/components/badge)               |
| Tag          | `35:53`    | `registry/habi/ui/tag.tsx`          | [tag](https://habi.yiliya.studio/docs/components/tag)                   |
| Notification | `37:42`    | `registry/habi/ui/notification.tsx` | [notification](https://habi.yiliya.studio/docs/components/notification) |
| Card         | `120:2118` | `registry/habi/ui/card.tsx`         | [card](https://habi.yiliya.studio/docs/components/card)                 |
| Text input   | `28:28`    | `registry/habi/ui/input.tsx`        | [text-input](https://habi.yiliya.studio/docs/components/text-input)     |
| Select       | `29:36`    | `registry/habi/ui/select.tsx`       | [select](https://habi.yiliya.studio/docs/components/select)             |
| Checkbox     | `34:35`    | `registry/habi/ui/checkbox.tsx`     | [checkbox](https://habi.yiliya.studio/docs/components/checkbox)         |
| Radio group  | `35:21`    | `registry/habi/ui/radio.tsx`        | [radio-group](https://habi.yiliya.studio/docs/components/radio-group)   |
| Date input   | `33:45`    | `registry/habi/ui/date-input.tsx`   | [date-input](https://habi.yiliya.studio/docs/components/date-input)     |
| OTP input    | `64:102`   | `registry/habi/ui/otp-input.tsx`    | [otp-input](https://habi.yiliya.studio/docs/components/otp-input)       |
| Search       | `30:24`    | `registry/habi/ui/search.tsx`       | [search](https://habi.yiliya.studio/docs/components/search)             |
| File input   | `63:57`    | `registry/habi/ui/file-input.tsx`   | [file-input](https://habi.yiliya.studio/docs/components/file-input)     |
| Modal        | `61:31`    | `registry/habi/ui/modal.tsx`        | [modal](https://habi.yiliya.studio/docs/components/modal)               |
| Tooltip      | `159:63`   | `registry/habi/ui/tooltip.tsx`      | [tooltip](https://habi.yiliya.studio/docs/components/tooltip)           |
| Breadcrumb   | `39:130`   | `registry/habi/ui/breadcrumb.tsx`   | [breadcrumb](https://habi.yiliya.studio/docs/components/breadcrumb)     |

Shared parts with no Figma component of their own:

- **Field** (`registry/habi/ui/field.tsx`, docs [field](https://habi.yiliya.studio/docs/components/field)): label, hint, error, fieldset. Figma draws them inside each form component.
- **Status icon** (`registry/habi/ui/status-icon.tsx`, docs [status-icon](https://habi.yiliya.studio/docs/components/status-icon)): Figma's `Icon/status-*` icons (`27:2`) with their backing.
- **Menu** (`101:246`, Menu item `101:91`): no file of its own. Select and Search style their own menus to match it.
- **Close button** (`165:2624`): no file of its own. Notification, Search and File input draw a 24px one; Modal draws the 32px one.

### To build, in order (28)

Built in this order so each one's parts already exist: Tooltip before the components that use it, Error summary before the form patterns that list errors, and the page frame before the service patterns. Components marked _New_ are still marked New in Figma, so check the Changelog before starting them.

**1. Planned (have a "Planned" docs page)**

| Component       | Figma node | Notes               |
| --------------- | ---------- | ------------------- |
| Official banner | `9:47`     | Base UI Collapsible |

**2. Page frame and content**

| Component    | Figma node              | Notes                                   |
| ------------ | ----------------------- | --------------------------------------- |
| Skip link    | `209:223` _(component)_ | Hidden until focused                    |
| Phase banner | `209:434`               | Badge + Link                            |
| Back link    | `192:209`               | Links to the previous step's URL        |
| Inset text   | `317:260` _(component)_ | _New_                                   |
| Warning text | `321:182` _(component)_ | _New_                                   |
| Details      | `317:245`               | _New_. Native `details`/`summary`       |
| Spinner      | `321:227`               | _New_. Small Inverse goes inside Button |

**3. Forms**

| Component           | Figma node            | Notes                             |
| ------------------- | --------------------- | --------------------------------- |
| Textarea            | `188:40`              | Character count; uses Tooltip     |
| Password input      | `292:283`             | _New_. Show/Hide button           |
| Mobile number input | `31:36`               | +63 prefix                        |
| ID number input     | `32:78`               | Grouped as printed on the card    |
| Name fields         | `33:71` _(component)_ | Given, middle, surname, suffix    |
| Error summary       | `190:211`             | Takes focus after a failed submit |
| Summary list        | `191:228`             | "Change" links name their field   |
| Privacy consent     | `211:262`             | Checkbox + Link; RA 10173         |

**4. Navigation and data**

| Component      | Figma node | Notes                                       |
| -------------- | ---------- | ------------------------------------------- |
| Tabs           | `295:208`  | _New_. Base UI Tabs                         |
| Pagination     | `292:382`  | _New_. `aria-current="page"`                |
| Table          | `298:354`  | _New_. Rows stack into blocks on phones     |
| Step indicator | `65:74`    | Step `65:23`                                |
| Task list      | `295:343`  | _New_. Task list item `295:342`, uses Badge |

**5. Service patterns**

| Component              | Figma node             | Notes                                       |
| ---------------------- | ---------------------- | ------------------------------------------- |
| Cookie banner          | `211:499`              | Full-width band; Tertiary buttons           |
| Requirements checklist | `67:51` _(component)_  | Requirement `67:41`                         |
| Appointment picker     | `68:63` _(component)_  | Date cell `68:22`, Time slot `68:49`        |
| Payment method picker  | `69:53` _(component)_  | Payment option `69:27`, Fee summary `69:37` |
| Confirmation panel     | `70:314` _(component)_ | Reference number in Mono/LG                 |
| Status tracker         | `71:70` _(component)_  | Status step `71:52`; reference in Mono/SM   |
| Digital ID card        | `72:46`                | shadow-card; ID number in Mono/SM           |

### Not building

- **Icon:** there's no Icon component. Code uses `@heroicons/react` directly.
- **Header (`40:35`) and Footer (`41:62`):** dropped from v1 on 2026-11-25. The Figma pages can stay.

## Code → Figma

Changes the Figma file should make to match code. Newest first.

- [ ] **Dark theme (planned):** the docs site and components will get a dark theme, designed in Figma first. Code waits for a dark set of semantic colour variables (same names, dark values) and dark examples of each built component. Until then the site stays light only.
- [ ] **Modal (`61:31`):** code dims the page behind with a new `overlay/backdrop` token (neutral/100 at 50%). Figma has no backdrop; add the variable and show it behind an example.
- [ ] **Modal (`61:31`):** the phone bottom sheet has no handle in code. It's built on Base UI Dialog, which has no swipe gesture, and a handle would look draggable. Remove the handle, or say if swiping down to close is wanted (that needs Base UI Drawer).
- [ ] **Tooltip (`159:63`):** code defaults to Align=Center, so the arrow points at the middle of the control. Figma's default variant is Align=Start. Consider making Center the default.
- [ ] **Breadcrumb (`39:130`):** "…" is plain text in code, not a link: a link named "…" doesn't say where it goes. Change Item 3 in Levels=Multiple to text.
- [ ] **Breadcrumb (`39:130`):** on phones, code shows the page above by name ("‹ Services") rather than "‹ Back", so people know where it goes. Update the usage example.
- [ ] **Accordion (`38:15`):** the content has 64px on the right, so it lines up inside the chevron. Code keeps that from 640px wide, and uses 16px below that, so answers aren't squeezed on a phone. Consider a Mobile example.
- [ ] **Tag (`35:53`):** the Anatomy note says the container is radius/full. The component (and code) use radius/md (8px). Fix the note.
- [ ] **Text input (`28:28`) / Select (`29:36`):** the Disabled state notes say field/02 fill. The components (and code) use layer/accent-01. Fix the notes.
- [ ] **Card (`120:2118`):** the Anatomy note says the container is background/default. The component (and code) use layer/01. Fix the note.
- [ ] **Card meta (`117:40`):** the Variants note says a 16px icon. The component (and code) use 20px. Fix the note.
- [ ] **Select (`29:36`):** the Anatomy note says the chevron is icon/secondary. The component (and code) use icon/primary. Fix the note.
- [ ] **Select (`29:36`):** the Open state note says the menu opens in duration/short (200ms). Code fades Select and Search menus in over duration/fast (100ms), so they feel instant. Change the note, or say why it should be slower.

No change needed, for the record:

- **Select (`29:36`):** Focus and Open use a 2px inside border; code draws a 2px inset outline. Same look.
- **Radio button (`35:21`) / Checkbox (`34:35`):** code matches the 24px control frame.

### Done

Ticked off from Figma Changelog entries on 2026-11-24.

- [x] **Link (`39:35`):** underline rules for Inline=True/False checked; no change needed.
- [x] **Button (`4:28`):** all 20 Focus variants draw the ring outside.
- [x] **Link / Button:** descriptions say there's no icon position prop in code.
- [x] **Menu item (`101:91`):** Selected rebound to highlight/default.
- [x] **Date input (`33:45`):** Day 64px, Month 152px, Year 88px.
- [x] **Search (`30:24`):** description covers ⌘K / Ctrl K and pointer-only.
- [x] **File upload (`63:57`):** Focus ring already outside "Choose file".
- [x] **Cover:** badge says "v0.1 Preview".
- [x] **Read me page:** added after Cover.
- [x] **Examples page:** component already named `_Example header`.
- [x] **Foundations:** colour frame renamed "Icon colors".
- [x] **Footer (`41:62`):** Logo slot added.
- [x] **Missing Hover/Focus states:** each lives on the part the component uses (Link, Step, Nav item, Footer link, Close button, Official banner, Requirement).

## Figma → code

Changes from the Figma Changelog page that code still has to pick up. The code agent copies entries here and ticks them off when they ship. New components are listed under [To build](#to-build-in-order-28); read their Changelog entries and docs page in Figma before starting one.

Copied 2026-11-25 (Changelog entries up to Spinner, 2026-11-25).

### For built components

- [x] **Mono text styles:** Mono/LG 18/28, Mono/SM 14/20, Mono/XS 12/20 in JetBrains Mono. Code has `text-mono-lg`, `text-mono-sm` and `text-mono-xs`; Search's shortcut hint uses `text-mono-xs`.
- [x] **JetBrains Mono:** `--font-mono` lists JetBrains Mono first. `@fontsource/jetbrains-mono` (400) loads next to `allo-font`, and the Installation page says to install it.
- [x] **Focus ring corners on text links:** Link's focus outline uses radius/sm (4px). Back link, Footer link, Nav item, Error summary item, Official banner and Step use it when they're built.
- [x] **Close button (`165:2624`):** Hover fills overlay/hover (neutral/100 at 8%). Code has the `overlay/hover` token, and the Notification close, Search clear and File input cancel buttons use it. Small is 24px, as in code.
- [x] **Checkbox (`34:35`):** don't pre-tick a box for something people didn't ask for. Added to the Checkbox docs page.
- [ ] **Mobile number input (`31:36`):** use "Enter a mobile number, like 917 123 4567." for an invalid number. (When it's built.)
- [x] **Modal (`61:31`):** close button is Medium, 32 × 32px.
- [ ] **Digital ID card (`72:46`):** uses shadow-card. (When it's built.)
- [ ] **Cookie banner (`211:499`):** full-width band on layer/accent-01 with a 1px border/subtle-01 line below, no corners or shadow; Accept and Reject are both Tertiary. (When it's built.)
- [ ] **Button + Spinner:** inside a Primary button, a Small Inverse Spinner takes the icon's place ("Paying…"). Add it to the Button docs when Spinner ships.
