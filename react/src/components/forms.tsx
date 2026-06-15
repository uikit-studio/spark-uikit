import * as React from "react";
import { cn } from "../lib/cn";

/** Label */
export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("text-sm font-medium text-foreground", className)} {...props} />;
}

/** Checkbox — custom box, themed via tokens. */
export const Checkbox = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <span className="inline-grid place-items-center">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "peer h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border-2 border-border bg-card transition-colors checked:border-primary checked:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50",
          className,
        )}
        {...props}
      />
      <svg className="pointer-events-none invisible col-start-1 row-start-1 h-3 w-3 text-primary-foreground peer-checked:visible" viewBox="0 0 12 10" fill="none">
        <path d="M1 5l3.5 3.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ),
);
Checkbox.displayName = "Checkbox";

/** Radio + RadioGroup */
export function RadioGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div role="radiogroup" className={cn("space-y-2", className)} {...props} />;
}
export function Radio({ label, className, ...props }: { label?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm">
      <input
        type="radio"
        className={cn(
          "h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-border bg-card transition-colors checked:border-[6px] checked:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
          className,
        )}
        {...props}
      />
      {label}
    </label>
  );
}

/** Switch */
export function Switch({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input type="checkbox" className="peer sr-only" {...props} />
      <span
        className={cn(
          "relative h-6 w-11 rounded-full bg-muted transition-colors peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40 after:absolute after:start-0.5 after:top-0.5 after:h-5 after:w-5 after:rounded-full after:bg-card after:shadow after:transition-all peer-checked:after:translate-x-5 rtl:peer-checked:after:-translate-x-5",
          className,
        )}
      />
    </label>
  );
}

/** Textarea */
export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "min-h-24 w-full rounded-[var(--radius)] border border-border bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

/** Select (native, styled) */
export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "h-11 w-full appearance-none rounded-[var(--radius)] border border-border bg-card px-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  ),
);
Select.displayName = "Select";

/** Slider (native range, themed) */
export function Slider({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="range"
      className={cn("h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-primary", className)}
      {...props}
    />
  );
}

/** Toggle (pressable button) */
export function Toggle({ pressed, className, ...props }: { pressed?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      aria-pressed={pressed}
      className={cn(
        "inline-flex h-10 items-center gap-2 rounded-[var(--radius)] border px-4 text-sm font-medium transition-colors",
        pressed ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:bg-muted",
        className,
      )}
      {...props}
    />
  );
}
