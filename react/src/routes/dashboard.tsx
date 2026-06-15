import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Container } from "../components/container";
import { StatCards } from "../blocks/stat-cards";
import { useI18n } from "../i18n";

/** Inline area chart — no chart lib, pure SVG, themed via currentColor. */
function AreaChart({ series }: { series: number[] }) {
  const max = Math.max(...series);
  const w = 320;
  const h = 120;
  const pad = 8;
  const pts = series.map((v, i) => [
    pad + (i / (series.length - 1)) * (w - pad * 2),
    h - pad - (v / max) * (h - pad * 2),
  ]);
  const line = pts.map((p) => p.join(",")).join(" ");
  const area = `${pad},${h - pad} ${line} ${w - pad},${h - pad}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-40 w-full text-primary" preserveAspectRatio="none">
      <polygon points={area} fill="currentColor" opacity="0.12" />
      <polyline points={line} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="currentColor" />
      ))}
    </svg>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name.trim().split(/\s+/).slice(0, 2).map((p) => p[0]).join("");
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
      {initials}
    </span>
  );
}

export function Dashboard() {
  const { t } = useI18n();
  const d = t.dashboard;
  const trafficMax = Math.max(...d.traffic.map((x) => x.value));

  return (
    <Container className="py-8">
      <div className="flex gap-6">
        {/* Sidebar */}
        <aside className="hidden w-52 shrink-0 lg:block">
          <nav className="space-y-1 text-sm font-medium">
            {d.nav.map((item, i) => (
              <a
                key={item}
                href="#"
                className={
                  "flex items-center gap-2.5 rounded-[var(--radius)] px-3.5 py-2.5 " +
                  (i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted")
                }
              >
                <span className={"h-1.5 w-1.5 rounded-full " + (i === 0 ? "bg-primary" : "bg-muted-foreground/40")} />
                {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 space-y-6">
          {/* Topbar */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-3xl font-bold tracking-tight">{d.title}</h1>
              <p className="text-sm text-muted-foreground">{d.subtitle}</p>
            </div>
            <input
              placeholder={d.search}
              className="hidden h-10 w-56 rounded-full border border-border bg-card px-4 text-sm outline-none focus:border-primary md:block"
            />
            <button className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground">
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary" />●
            </button>
            <Button size="sm">{d.action}</Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-border">
            {d.tabs.map((tab, i) => (
              <button
                key={tab}
                className={
                  "border-b-2 px-4 py-2.5 text-sm font-medium " +
                  (i === 0 ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground")
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <StatCards stats={d.stats} />

          {/* Charts row */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader className="flex-row items-start justify-between">
                <div>
                  <CardTitle>{d.chartTitle}</CardTitle>
                  <p className="text-xs text-muted-foreground">{d.chartCaption}</p>
                </div>
                <div className="text-end">
                  <p className="font-display text-2xl font-bold">{d.chartTotal}</p>
                  <Badge variant="success">+18%</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <AreaChart series={d.series} />
                <div className="mt-2 flex justify-between font-mono text-[10px] uppercase text-muted-foreground">
                  {d.months.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{d.trafficTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3.5">
                {d.traffic.map((row) => (
                  <div key={row.label}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-muted-foreground">{row.label}</span>
                      <span className="font-medium">{row.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${(row.value / trafficMax) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Table + activity */}
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2">
              <CardHeader className="flex-row items-center justify-between">
                <CardTitle>{d.tableTitle}</CardTitle>
                <Badge variant="brand">live</Badge>
              </CardHeader>
              <CardContent>
                <table className="w-full text-start text-sm">
                  <thead className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      {d.cols.map((c) => (
                        <th key={c} className="pb-3 text-start font-medium">{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {d.rows.map((r) => (
                      <tr key={r.name} className="border-t border-border">
                        <td className="py-3 font-medium">{r.name}</td>
                        <td className="py-3">{r.reach}</td>
                        <td className="py-3">
                          <Badge variant={r.status === d.active ? "success" : "outline"}>{r.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{d.activityTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {d.activity.map((a, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm leading-snug">{a.text}</p>
                        <p className="font-mono text-[11px] text-muted-foreground">{a.time}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Customers */}
          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>{d.usersTitle}</CardTitle>
              <Button variant="ghost" size="sm">{d.seeAll}</Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {d.users.map((u) => (
                  <div key={u.name} className="flex items-center gap-3 rounded-[var(--radius)] border border-border p-3">
                    <Avatar name={u.name} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{u.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{u.org}</p>
                    </div>
                    <Badge variant={u.status === d.trial ? "outline" : "success"}>{u.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </Container>
  );
}
