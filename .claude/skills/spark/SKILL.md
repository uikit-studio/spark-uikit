---
name: spark-ui
description: >-
  Build apps with the Spark UI kit. Use whenever the user asks to create, extend,
  or style any UI in a project that contains this kit. Bold marketing kit — big
  type, orange, cream + ink, grotesk display, monospace labels, highlight-marker
  headings, dark mode, and EN/AR + RTL. Gives exact components, tokens, and rules.
---

# Building with Spark

Spark is a bold marketing kit: cream + ink + vivid orange, a grotesk display face,
monospace micro-labels, highlight-marker headings. **Build with the kit's tokens
and components — never invent new colors, fonts, or one-off components.**

## Golden rules

1. **Tokens, not hex.** `bg-background`, `text-foreground`, `bg-card`,
   `text-muted-foreground`, `border-border`, `bg-primary`/`text-primary-foreground`,
   `bg-ink`/`text-ink-foreground`, brand scale `bg-brand-500`. Never `bg-[#hex]`.
2. **Type roles.** Headings → `font-display` (Space Grotesk) and wrap the key word in
   `<Mark>`. Eyebrows, stats, table headers, labels → `font-mono`. Body → `font-sans`.
3. **Radius is a token** (`rounded-[--radius]` / `rounded-[--radius-lg]`); buttons are
   pills (`rounded-full`).
4. **Dark mode is free** — tokens flip under `.dark`.
5. **Bilingual always.** Put every string in `src/i18n/en.ts` *and* `src/i18n/ar.ts`;
   read it with `useI18n()`. Never hard-code copy. Keep RTL-safe: `text-start`,
   `rtl:rotate-180` for arrows, etc.
6. **Compose from blocks and pages** (landing/pricing/dashboard/showcase) first.

## In the box

- Components (`src/components/`): Button (primary/ink/outline/ghost · sm/md/lg),
  Card, Input, Badge, **Pill**, **Mark** (highlight), **Marquee**, Container.
- Blocks (`src/blocks/`): Navbar, Footer, StatCards.
- Pages (`src/routes/`): layout (header + EN/AR + dark toggles), landing, pricing,
  dashboard, showcase.
- Tokens (`design/`): tokens.json, theme.css, tailwind-preset.js.
- i18n (`src/i18n/`): en.ts, ar.ts, index.tsx (`I18nProvider`, `useI18n`).

## Building a screen

1. Start from the closest page/block; swap the data via the i18n dictionaries.
2. Compose existing components; use `<Mark>` on the hero word and `font-mono` eyebrows.
3. Add new strings to `en.ts` + `ar.ts`. Stay in the token system.

See `reference/tokens.md` and `reference/components.md`.
