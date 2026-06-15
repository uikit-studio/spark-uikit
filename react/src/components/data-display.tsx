import * as React from "react";
import { cn } from "../lib/cn";

/** Avatar (initials or image) */
export function Avatar({ name = "", src, className }: { name?: string; src?: string; className?: string }) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map((p) => p[0]).join("");
  return (
    <span className={cn("grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-primary/10 font-display text-sm font-bold text-primary", className)}>
      {src ? <img src={src} alt={name} className="h-full w-full object-cover" /> : initials}
    </span>
  );
}

export function AvatarGroup({ names, className }: { names: string[]; className?: string }) {
  return (
    <div className={cn("flex -space-x-2 rtl:space-x-reverse", className)}>
      {names.map((n) => (
        <span key={n} className="ring-2 ring-background rounded-full">
          <Avatar name={n} className="h-9 w-9" />
        </span>
      ))}
    </div>
  );
}

/** Tag / Chip (optionally removable) */
export function Tag({ children, onRemove, className }: { children: React.ReactNode; onRemove?: () => void; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground", className)}>
      {children}
      {onRemove && (
        <button onClick={onRemove} className="grid h-4 w-4 place-items-center rounded-full text-muted-foreground hover:bg-border" aria-label="Remove">
          ×
        </button>
      )}
    </span>
  );
}

/** Separator */
export function Separator({ className, vertical }: { className?: string; vertical?: boolean }) {
  return <div role="separator" className={cn("bg-border", vertical ? "w-px self-stretch" : "h-px w-full", className)} />;
}

/** Kbd */
export function Kbd({ children }: { children: React.ReactNode }) {
  return <kbd className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground">{children}</kbd>;
}

/** Table primitives */
export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return <table className={cn("w-full text-start text-sm", className)} {...props} />;
}
export function THead({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn("font-mono text-xs uppercase tracking-wide text-muted-foreground", className)} {...props} />;
}
export function TH({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return <th className={cn("pb-3 text-start font-medium", className)} {...props} />;
}
export function TR({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn("border-t border-border", className)} {...props} />;
}
export function TD({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) {
  return <td className={cn("py-3", className)} {...props} />;
}
