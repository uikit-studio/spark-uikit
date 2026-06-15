import * as React from "react";
import { cn } from "../lib/cn";

/** Tooltip (CSS hover/focus, no portal) */
export function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute bottom-full start-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2.5 py-1 text-xs font-medium text-ink-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 rtl:translate-x-1/2">
        {label}
      </span>
    </span>
  );
}

/** Dialog / Modal (controlled by trigger) */
export function Dialog({ trigger, title, children }: { trigger: React.ReactNode; title?: string; children?: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <span onClick={() => setOpen(true)}>{trigger}</span>
      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4" role="dialog" aria-modal>
          <div className="absolute inset-0 bg-ink/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="bg-card relative w-full max-w-md rounded-[var(--radius-lg)] border border-border p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-start justify-between gap-4">
              {title && <h3 className="font-display text-lg font-bold">{title}</h3>}
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground" aria-label="Close">×</button>
            </div>
            <div className="mt-3 text-sm text-muted-foreground">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

/** Dropdown menu */
export function DropdownMenu({ label, items }: { label: React.ReactNode; items: { label: string; onClick?: () => void }[] }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-10 items-center gap-2 rounded-[var(--radius)] border border-border bg-card px-4 text-sm font-medium hover:bg-muted"
      >
        {label} <span className="text-muted-foreground">▾</span>
      </button>
      {open && (
        <div className="bg-card absolute end-0 z-20 mt-2 w-44 rounded-[var(--radius)] border border-border p-1.5 shadow-[var(--shadow-card)]">
          {items.map((it) => (
            <button
              key={it.label}
              onClick={() => {
                it.onClick?.();
                setOpen(false);
              }}
              className="block w-full rounded-md px-3 py-2 text-start text-sm hover:bg-muted"
            >
              {it.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Accordion */
export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className="divide-y divide-border rounded-[var(--radius-lg)] border border-border">
      {items.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start font-medium"
          >
            {item.q}
            <span className={cn("text-muted-foreground transition-transform", open === i && "rotate-45")}>+</span>
          </button>
          {open === i && <p className="px-5 pb-4 text-sm text-muted-foreground">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
