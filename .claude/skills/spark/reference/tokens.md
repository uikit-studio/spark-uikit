# Spark token map

Semantic classes (they flip in dark mode automatically):

| Purpose | Class |
| --- | --- |
| Page background (cream) | `bg-background` |
| Body text (ink) | `text-foreground` |
| Card surface | `bg-card` |
| Muted surface / secondary text | `bg-muted` / `text-muted-foreground` |
| Borders | `border-border` |
| Primary (orange) | `bg-primary` / `text-primary-foreground` |
| Dark sections | `bg-ink` / `text-ink-foreground` |
| Highlight marker | the `<Mark>` component (uses `--color-mark`) |

Brand scale: `brand-50 … brand-700` (orange).

## Fonts (type roles)

- `font-display` — Space Grotesk · headings, prices, big numbers.
- `font-mono` — JetBrains Mono · eyebrows, stats, table headers, badges/pills text.
- `font-sans` — Inter (Cairo in Arabic) · body copy.

## Primitives

- Radius: `rounded-[--radius]` (1rem), `rounded-[--radius-lg]` (1.5rem); buttons `rounded-full`.
- Shadow: `shadow-[var(--shadow-card)]`.
- Texture: the `dotted` utility (subtle dotted background).

**Do:** `className="bg-card text-foreground rounded-[--radius-lg] shadow-[var(--shadow-card)]"`
**Don't:** `className="bg-white text-black rounded-xl shadow-lg"`
