import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../lib/cn";

/** Alert */
const alert = cva("flex gap-3 rounded-[var(--radius)] border p-4 text-sm", {
  variants: {
    variant: {
      info: "border-primary/30 bg-primary/5 text-foreground",
      success: "border-success/30 bg-success/5 text-foreground",
      warning: "border-amber-500/30 bg-amber-500/5 text-foreground",
      danger: "border-rose-500/30 bg-rose-500/5 text-foreground",
    },
  },
  defaultVariants: { variant: "info" },
});
export function Alert({
  variant,
  title,
  children,
  className,
}: { title?: string; children?: React.ReactNode } & VariantProps<typeof alert> & { className?: string }) {
  const dot = { info: "bg-primary", success: "bg-success", warning: "bg-amber-500", danger: "bg-rose-500" }[variant ?? "info"];
  return (
    <div className={cn(alert({ variant }), className)} role="alert">
      <span className={cn("mt-1.5 h-2 w-2 shrink-0 rounded-full", dot)} />
      <div>
        {title && <p className="font-semibold">{title}</p>}
        {children && <p className="text-muted-foreground">{children}</p>}
      </div>
    </div>
  );
}

/** Progress */
export function Progress({ value = 0, className }: { value?: number; className?: string }) {
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-muted", className)}>
      <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

/** Spinner */
export function Spinner({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-block h-5 w-5 animate-spin rounded-full border-2 border-border border-t-primary", className)}
      role="status"
      aria-label="Loading"
    />
  );
}

/** Skeleton */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-[var(--radius)] bg-muted", className)} />;
}

/** Toast (inline, controlled) */
export function Toast({ title, children, onClose }: { title?: string; children?: React.ReactNode; onClose?: () => void }) {
  return (
    <div className="bg-card flex items-start gap-3 rounded-[var(--radius)] border border-border p-4 shadow-[var(--shadow-card)]">
      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
      <div className="flex-1">
        {title && <p className="text-sm font-semibold">{title}</p>}
        {children && <p className="text-sm text-muted-foreground">{children}</p>}
      </div>
      {onClose && (
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground" aria-label="Close">×</button>
      )}
    </div>
  );
}

/** Empty state */
export function EmptyState({ title, children, action }: { title: string; children?: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="grid place-items-center rounded-[var(--radius-lg)] border border-dashed border-border p-10 text-center">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-muted text-muted-foreground">∅</div>
      <p className="mt-3 font-display font-semibold">{title}</p>
      {children && <p className="mt-1 max-w-sm text-sm text-muted-foreground">{children}</p>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
