# Using Spark

Spark is a bold marketing UI kit (orange · big type · gradient accents). It's a
**runnable starter app** plus a design system, a Claude Code skill, and a
shadcn-style registry.

## Run it (see everything)

Pick a framework and run it — each folder is a full app:

```bash
git clone https://github.com/uikit-studio/spark-uikit my-app

cd my-app/react && pnpm install && pnpm dev   # React           → http://localhost:5173
# or
cd my-app/vue   && pnpm install && pnpm dev   # Vue             → http://localhost:5174
# or
cd my-app/web   && pnpm install && pnpm dev   # Web Components  → http://localhost:5175
```

You get four routes out of the box, in **English and Arabic (RTL)**:

- **/** — landing (hero · marquee · features · dark bento · CTA · footer)
- **/pricing** — pricing tiers
- **/dashboard** — dashboard layout (sidebar · KPI cards · table)
- **/components** — the design-system showcase (every component, colors, type) with
  **light/dark** and **EN/AR** toggles in the header

Make it yours: swap copy in `src/i18n/{en,ar}.ts`, edit pages in `src/routes/*`,
tweak tokens in `design/`, and delete the dev header in `src/routes/Layout`.

> `design/` (tokens · theme · preset) is shared by every framework. All three
> variants — `react/`, `vue/`, `web/` (Lit) — are at full parity: the same four
> pages, design system, EN/AR + RTL, and dark mode.

## Build with AI

Open the repo in Claude Code and ask:

> "Build a product landing page using this kit."

The bundled skill (`.claude/skills/spark`) gives the AI Spark's components, tokens,
and rules — consistent, cheap output.

## Pull individual pieces into another project (shadcn-style)

```bash
npx uikit-studio add button card        # copy components
npx uikit-studio add dashboard          # a full template + its dependencies
```

## What's inside

```text
design/    tokens.json · theme.css · tailwind-preset.js   (framework-agnostic)
react/     runnable Vite app — components · blocks · routes (landing/dashboard/showcase)
registry/  index.json   (uikit add targets)
.claude/   skills/spark  (the consumer skill)
screenshots/ logo · landing
uikit.json the contract
```

MIT licensed.
