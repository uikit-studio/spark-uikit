import { Card, CardContent } from "../components/card";
import { cn } from "../lib/cn";

export interface Stat {
  label: string;
  value: string;
  delta?: string;
}

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <Card key={s.label}>
          <CardContent className="p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{s.label}</p>
            <p className="mt-2 font-display text-3xl font-bold tracking-tight">{s.value}</p>
            {s.delta && (
              <p
                className={cn(
                  "mt-1 text-xs font-bold",
                  s.delta.startsWith("-") ? "text-rose-500" : "text-success",
                )}
              >
                {s.delta}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
