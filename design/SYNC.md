# Design ↔ code sync

How the Figma file and the code stay in step. Two agents use this file:

- **The code agent** (Claude Code, in this repo) builds components, demos and docs pages.
- **The Figma agent** (Claude desktop, with the Figma connector) designs in the [Habi Figma file](https://www.figma.com/design/D3nJzUeqpGlyMpimlesib6).

Last updated 2026-11-24.

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

Node IDs are component sets unless marked _(page)_.

### Built (14 of 21)

| Component    | Figma node | Code                                | Docs                                                                    |
| ------------ | ---------- | ----------------------------------- | ----------------------------------------------------------------------- |
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

Shared parts with no Figma component of their own:

- **Field parts** (`registry/habi/ui/field.tsx`): label, hint, error, fieldset. Figma draws them inside each form component.
- **Status icon** (`registry/habi/ui/status-icon.tsx`): Figma's `Icon/status-*` icons with their backing.
- **Menu** (`101:246`, Menu item `101:91`): no file of its own. Select and Search style their own menus to match it.

### Next, in order

Each has a "Planned" page on the docs site, written from its Figma description.

| Component       | Figma node | Notes                                  |
| --------------- | ---------- | -------------------------------------- |
| Accordion       | `38:15`    | Base UI Accordion                      |
| Modal           | `61:31`    | Base UI Dialog; bottom sheet on phones |
| Tooltip         | `159:63`   | Base UI Tooltip                        |
| Breadcrumb      | `39:130`   | `<nav aria-label="Breadcrumb"><ol>`    |
| Official banner | `9:47`     | Base UI Collapsible                    |
| Header          | `40:35`    | Mobile menu in a Drawer or Dialog      |
| Footer          | `41:62`    | Logo slot for the agency mark          |

### In Figma, not planned yet

Appointment picker `68:63` · Back link `192:43` _(page)_ · Confirmation panel `70:314` · Cookie banner `211:275` _(page)_ · Digital ID card `72:46` · Error summary `190:41` _(page)_ · ID number input `32:78` · Mobile number input `31:36` · Name fields `33:71` · Payment method picker `69:53` · Phase banner `209:245` _(page)_ · Privacy consent `211:61` _(page)_ · Requirements checklist `67:51` · Skip link `209:61` _(page)_ · Status tracker `71:70` · Step indicator `65:74` · Summary list `191:41` _(page)_ · Textarea `188:35` _(page)_

### Not building

- **Icon:** there's no Icon component. Code uses `@heroicons/react` directly.

## Code → Figma

Changes the Figma file should make to match code. Newest first.

- [ ] **Link (`39:35`):** code underlines links in text (WCAG 1.4.1); standalone links underline on hover. The description now says this (Inline=True/False). Check the variants match it.
- [ ] **Button (`4:28`):** the Focus variant draws the ring inside as a 2px border; code draws it outside (outline, offset 0) for better contrast against dark fills. Consider matching the Focus/Ring effect style.
- [ ] **Link / Button:** code has no icon position prop. The icon goes where the child is placed. The Figma property can stay; note it in the description.
- [ ] **Menu item (`101:91`):** Selected background is bound to `support/info-subtle`; Tag's selected state uses `highlight/default` (the same blue). Code uses `highlight/default` for both. Rebind Menu item so "selected" means one token.
- [ ] **Date input (`33:45`):** field widths are Day 64px, Month 152px, Year 88px. "September" didn't fit the 140px Month box.
- [ ] **Search (`30:24`):** code shows the shortcut as ⌘K on Apple devices and "Ctrl K" elsewhere, and only on devices with a mouse or trackpad.
- [ ] **File upload (`63:57`):** code shows the Focus state's ring outside the "Choose file" button (outline, offset 0), like other buttons.
- [ ] **Cover:** says "v1". Change it to "v0.1 Preview".
- [ ] **Read me page:** missing (what Habi is, enabling the library, credits, changelog, disclaimer).
- [ ] **Examples page:** has a component named "Header" (`107:2607`). Rename it, for example `_Example header`.
- [ ] **Foundations:** two frames are named "Icons". Tidy.
- [x] **Footer (`41:62`):** the description mentioned a logo placeholder with no Logo slot. Figma now has a Logo slot (checked 2026-11-24).
- [ ] **Missing Hover/Focus states:** Breadcrumb links, Step links, Header nav items, Footer links, Notification close, Modal close, Official banner toggle, Requirement row.

No change needed, for the record:

- **Select (`29:36`):** Focus and Open use a 2px inside border; code draws a 2px inset outline. Same look.
- **Radio button (`35:21`) / Checkbox (`34:35`):** code matches the 24px control frame.

## Figma → code

Changes from the Figma Changelog page that code still has to pick up. The code agent copies entries here and ticks them off when they ship.

_None yet._
