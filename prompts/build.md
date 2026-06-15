# How Spark was built

Generated via the `uikit-standard` skill from the brief:

> A bold marketing kit — big type, orange, gradient accents, cream + ink, a
> grotesk display + monospace labels, highlight-marker headings. React-first.
> Full dark mode and EN/AR + RTL. Ship landing, pricing, dashboard, and a
> components showcase.

Steps the standard followed:

1. Tokens (`design/tokens.json`) → `theme.css` (display/sans/mono fonts,
   `--color-mark`, dark block, `[dir="rtl"]` Arabic font swap) → `tailwind-preset.js`.
2. i18n (`react/src/i18n/`): `en` + `ar` dictionaries + a provider that flips
   `dir`/`lang` and toggles language.
3. Design system: `cn`, Button, Card, Input, Badge, Pill, Mark, Marquee, Container.
4. Blocks (Navbar, Footer, StatCards) → the four pages: Landing (hero · marquee ·
   features · dark bento · CTA · footer), Pricing, Dashboard, Components showcase.
5. App shell (`routes/layout.tsx`): header with page nav, EN/AR toggle, dark toggle.
6. Consumer skill (`.claude/skills/spark`), registry, screenshots, validated `uikit.json`.

Runs with `cd react && pnpm install && pnpm dev`.
