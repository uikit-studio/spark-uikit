# Spark component API

Import from `src/components/…` (or `components/ui/…` after `uikit add`).

## Button

```tsx
<Button>Primary</Button>
<Button variant="ink">Ink</Button>
<Button variant="outline" size="lg">Outline</Button>
<Button variant="ghost" size="sm">Ghost</Button>
```
`variant`: primary · ink · outline · ghost · `size`: sm · md · lg. Pills by default.

## Mark — the highlight heading accent

```tsx
<h1 className="font-display text-6xl font-bold">
  Launch loud. <Mark>Spark</Mark> attention.
</h1>
```

## Pill & Badge

```tsx
<Pill variant="brand">✦ Eyebrow label</Pill>   // mono, uppercase
<Badge variant="success">Active</Badge>
```
Pill variants: solid · soft · brand · outline. Badge: neutral · brand · success · outline.

## Marquee

```tsx
<Marquee items={["BIG TYPE", "BOLD COLOR", "RTL READY"]} />  // reverses in RTL
```

## Card · Input · Container

```tsx
<Card><CardHeader><CardTitle>…</CardTitle></CardHeader><CardContent>…</CardContent></Card>
<Input placeholder="you@example.com" />
<Container>…</Container>
```

## Blocks & pages

- Blocks (`src/blocks/`): `Navbar`, `Footer`, `StatCards({ stats })`.
- Pages (`src/routes/`): `layout` (header + EN/AR + dark toggle), `landing`,
  `pricing`, `dashboard`, `showcase`. Start from the closest page and swap the
  `i18n` strings.

## i18n

```tsx
const { t, lang, dir, setLang } = useI18n();
<h2>{t.features.heading} <Mark>{t.features.headingMark}</Mark></h2>
```
Add new copy to `src/i18n/en.ts` and `src/i18n/ar.ts`.
