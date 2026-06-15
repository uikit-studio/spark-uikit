/** Infinite scrolling ticker. Reverses automatically in RTL. */
export function Marquee({ items }: { items: readonly string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-foreground py-3 text-background">
      <div className="spark-marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 font-mono text-sm font-medium uppercase tracking-widest">
            {item}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
