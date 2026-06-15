# Spark — bold marketing UI kit

A bold **marketing & landing** kit: big type, cream + ink and a vivid orange
accent. Heavy grotesk display, monospace micro-labels, highlight-marker headings
and a marquee. Light + dark, full **EN/AR + RTL**. Runnable **React, Vue and Web
Components** apps you clone and ship from.

[![Live demo](https://img.shields.io/badge/live-uikit.studio%2Fkit%2Fspark-7c5cff)](https://uikit.studio/kit/spark)
[![CLI](https://img.shields.io/badge/cli-uikit--studio-22d3ee)](https://www.npmjs.com/package/uikit-studio)
![License](https://img.shields.io/badge/license-MIT-34d399)
![Frameworks](https://img.shields.io/badge/react%20·%20vue%20·%20web%20components-555)

![Spark landing](./screenshots/landing.png)

**[▶ Open the live demo →](https://uikit.studio/demos/spark/)** &nbsp;·&nbsp;
**[Gallery page →](https://uikit.studio/kit/spark)**

## Quick start

```bash
git clone https://github.com/uikit-studio/spark-uikit my-app
cd my-app/react              # or: vue / web
pnpm install && pnpm dev     # → a real app at localhost:5173
```

Then open in Claude Code and ask: *"build a product landing page using this kit."*
The bundled skill (`.claude/skills/spark`) makes the AI build **with** the kit's
tokens and components.

## Design system

| | |
|---|---|
| **Primary** | `#f97316` (orange) |
| **Mark** | `#fb923c` (highlight) |
| **Display** | Space Grotesk |
| **Body** | Inter |
| **Mono** | JetBrains Mono |
| **Radius** | 1rem |
| **Modes** | light + dark |
| **i18n** | EN + AR with full RTL |

**Frameworks** — React · Vue · Web Components (Lit)
**Components** — Button · Card · Input · Badge · Pill · Mark · Marquee · Container
**Blocks** — Navbar · Footer · StatCards
**Pages** — Landing · Pricing · Dashboard · Components showcase

Tokens live in [`design/`](./design) (`tokens.json` → `theme.css` v4 +
`tailwind-preset.js` v3). The manifest is [`uikit.json`](./uikit.json).

## Screenshots

| Dashboard | Components showcase |
|---|---|
| ![Dashboard](./screenshots/dashboard.png) | ![Components](./screenshots/components.png) |

## Add pieces to an existing project

```bash
npx uikit-studio add landing       # a full template + every component it needs
npx uikit-studio add button card   # just the components you want
```

See **[USAGE.md](./USAGE.md)** for the full consumer guide.

---

MIT © UIKit Team · part of the [uikit.studio](https://uikit.studio) gallery
