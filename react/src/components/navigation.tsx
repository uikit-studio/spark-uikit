import * as React from "react";
import { cn } from "../lib/cn";

/** Tabs (uncontrolled) */
export function Tabs({ tabs, children, className }: { tabs: string[]; children?: (active: number) => React.ReactNode; className?: string }) {
  const [active, setActive] = React.useState(0);
  return (
    <div className={className}>
      <div className="flex gap-1 border-b border-border">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            onClick={() => setActive(i)}
            className={cn(
              "border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
              i === active ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      {children && <div className="pt-4">{children(active)}</div>}
    </div>
  );
}

/** Breadcrumb */
export function Breadcrumb({ items }: { items: string[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <React.Fragment key={item}>
          {i > 0 && <span className="text-border">/</span>}
          <span className={i === items.length - 1 ? "font-medium text-foreground" : "hover:text-foreground"}>{item}</span>
        </React.Fragment>
      ))}
    </nav>
  );
}

/** Pagination */
export function Pagination({ pages = 5 }: { pages?: number }) {
  const [page, setPage] = React.useState(1);
  return (
    <div className="flex items-center gap-1">
      <button onClick={() => setPage((p) => Math.max(1, p - 1))} className="grid h-9 w-9 place-items-center rounded-[var(--radius)] border border-border text-muted-foreground hover:bg-muted">
        <span className="rtl:rotate-180">‹</span>
      </button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={cn(
            "h-9 min-w-9 rounded-[var(--radius)] px-3 text-sm font-medium",
            p === page ? "bg-primary text-primary-foreground" : "border border-border text-foreground hover:bg-muted",
          )}
        >
          {p}
        </button>
      ))}
      <button onClick={() => setPage((p) => Math.min(pages, p + 1))} className="grid h-9 w-9 place-items-center rounded-[var(--radius)] border border-border text-muted-foreground hover:bg-muted">
        <span className="rtl:rotate-180">›</span>
      </button>
    </div>
  );
}

/** Stepper */
export function Stepper({ steps, current = 1 }: { steps: string[]; current?: number }) {
  return (
    <ol className="flex flex-wrap items-center gap-3">
      {steps.map((step, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={step} className="flex items-center gap-2">
            <span
              className={cn(
                "grid h-7 w-7 place-items-center rounded-full text-xs font-bold",
                done ? "bg-primary text-primary-foreground" : active ? "border-2 border-primary text-primary" : "border border-border text-muted-foreground",
              )}
            >
              {done ? "✓" : i + 1}
            </span>
            <span className={cn("text-sm", active ? "font-medium text-foreground" : "text-muted-foreground")}>{step}</span>
            {i < steps.length - 1 && <span className="mx-1 h-px w-6 bg-border" />}
          </li>
        );
      })}
    </ol>
  );
}
