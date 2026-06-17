# Extending Spark with AI

With the bundled skill active, ask in plain language and stay in the system:

- "Add a testimonials section to the landing page." → compose Card + Pill + Mark,
  add strings to `i18n/en.ts` + `i18n/ar.ts`, drop it into `routes/landing.tsx`.
- "Add a Tabs component matching Spark." → new `components/tabs.tsx` on the tokens,
  add a registry entry in `registry/index.json`.
- "Add a settings page." → new route in `routes/`, wired into `main.tsx` and the nav.

Rules when extending:

1. **Every string is bilingual** — add it to `en.ts` *and* `ar.ts`; never hard-code.
2. **Type roles**: `font-display` for headings (+ `<Mark>` on the key word),
   `font-mono` for eyebrows/labels/stats, `font-sans` for body.
3. **Tokens only** — `bg-primary`, `text-foreground`, `rounded-[--radius]`, etc.
   New tokens go in `design/tokens.json` + `theme.css` first.
4. **RTL-safe** — `text-start`, `rtl:` variants for directional glyphs.
5. New surface items go in `uikit.json` (`surface`) and `registry/index.json`.
   Run `npx uikit-cli validate` before committing.
