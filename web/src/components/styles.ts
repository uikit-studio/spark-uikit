/** Shared Tailwind class strings for the Spark web-components design system. */
export type ButtonVariant = "primary" | "ink" | "outline" | "ghost";
export type Size = "sm" | "md" | "lg";

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95 disabled:opacity-50 whitespace-nowrap cursor-pointer";
const BTN_VARIANT: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:brightness-105",
  ink: "bg-ink text-ink-foreground hover:brightness-125",
  outline: "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background",
  ghost: "text-foreground hover:bg-muted",
};
const BTN_SIZE: Record<Size, string> = { sm: "h-9 px-4 text-sm", md: "h-11 px-6", lg: "h-14 px-8 text-lg" };
export const buttonClass = (v: ButtonVariant = "primary", s: Size = "md") =>
  `${BTN_BASE} ${BTN_VARIANT[v]} ${BTN_SIZE[s]}`;

export type PillVariant = "solid" | "soft" | "brand" | "outline";
const PILL_BASE = "inline-flex items-center gap-1.5 rounded-full font-mono text-xs font-medium uppercase tracking-wide px-3 py-1";
const PILL_VARIANT: Record<PillVariant, string> = {
  solid: "bg-foreground text-background",
  soft: "bg-muted text-muted-foreground",
  brand: "bg-brand-100 text-brand-700",
  outline: "border border-border text-muted-foreground",
};
export const pillClass = (v: PillVariant = "soft") => `${PILL_BASE} ${PILL_VARIANT[v]}`;

export type BadgeVariant = "neutral" | "brand" | "success" | "outline";
const BADGE_BASE = "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold";
const BADGE_VARIANT: Record<BadgeVariant, string> = {
  neutral: "bg-muted text-muted-foreground",
  brand: "bg-brand-100 text-brand-700",
  success: "bg-success/15 text-success",
  outline: "border-2 border-border text-foreground",
};
export const badgeClass = (v: BadgeVariant = "neutral") => `${BADGE_BASE} ${BADGE_VARIANT[v]}`;

export const cardClass =
  "rounded-[--radius-lg] border border-border bg-card text-foreground shadow-[var(--shadow-card)]";
export const inputClass =
  "h-11 w-full rounded-full border-2 border-border bg-card px-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
export const containerClass = "mx-auto w-full max-w-6xl px-6";
