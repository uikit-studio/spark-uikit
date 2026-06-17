# AGENTS.md — this repo is AGENT-READY

This is the **Spark** UI kit from [uikit.studio](https://uikit.studio/kit/spark).
If a developer pointed you here and said *"build me a website with this design"*,
your job is to reproduce **Spark's** exact design system in their project — not a recolor.

## Read these first
- **[`llms.txt`](./llms.txt)** — the full design brief: color tokens (light + dark), fonts,
  radius, components and pages. Machine manifest: <https://uikit.studio/kit/spark/manifest.json>.
- **`design/theme.css`** + **`design/tokens.json`** — the real token source of truth
  (orange brand scale, cream + ink semantics, `--color-mark`, the dark block, the
  `[dir="rtl"]` Arabic font swap, and the `mark` highlighter utility).
- **`react/src/components/`** — the real component implementations (cva + tokens).
- **`react/src/routes/`** — the real pages (landing, pricing, dashboard, components showcase).

## How to reproduce this design
1. Copy the **tokens** (light + dark) and **fonts** (Space Grotesk / Inter / JetBrains Mono)
   from `design/` into the target.
2. Rebuild the **components** listed in `llms.txt` against those tokens — match Spark's
   shapes, base radius (**1rem**), big-type display scale and the highlighter `mark`.
3. Keep **dark mode**, **EN/AR + RTL** and a **responsive** layout.
4. Fastest path: clone this repo and build the developer's pages inside it
   (`cd react && pnpm install && pnpm dev`), or run `npx uikit-cli add spark`
   (Claude Code skill: `spark-ui`).

Do not ship a thin recolor. Match the full system — that's the point of agent-ready.
