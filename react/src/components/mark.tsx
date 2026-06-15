import * as React from "react";
import { cn } from "../lib/cn";

/** Highlight-marker text — Spark's signature heading accent. */
export function Mark({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn("mark rounded-sm", className)} {...props} />;
}
