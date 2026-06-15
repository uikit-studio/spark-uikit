import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Container } from "../components/container";
import { Avatar } from "../components/data-display";
import { Progress } from "../components/feedback";
import { StatCards } from "../blocks/stat-cards";
import { useI18n } from "../i18n";

/** Full-bleed bar chart for the marketing "board" hero. */
function Bars({ series }: { series: number[] }) {
  const max = Math.max(...series);
  return (
    <div className="flex h-40 items-end gap-2">
      {series.map((v, i) => (
        <div key={i} className="flex-1 rounded-t-[var(--radius)] bg-gradient-to-t from-brand-300 to-primary" style={{ height: `${(v / max) * 100}%` }} />
      ))}
    </div>
  );
}

export function Dashboard() {
  const { t } = useI18n();
  const d = t.dashboard;
  const trafficMax = Math.max(...d.traffic.map((x) => x.value));

  return (
    <Container className="space-y-7 py-8">
      {/* Header — no sidebar; a marketing board */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight">{d.title}</h1>
          <p className="text-muted-foreground">{d.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <input placeholder={d.search} className="hidden h-10 w-56 rounded-full border border-border bg-card px-4 text-sm outline-none focus:border-primary sm:block" />
          <Button>{d.action}</Button>
        </div>
      </div>

      {/* Reach hero — full-width chart card (adapts to light/dark) */}
      <div className="rounded-[var(--radius-lg)] border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-muted-foreground">{d.chartTitle} · {d.chartCaption}</p>
            <p className="font-display text-5xl font-bold">{d.chartTotal}</p>
          </div>
          <Badge variant="success">+18%</Badge>
        </div>
        <div className="mt-6"><Bars series={d.series} /></div>
        <div className="mt-2 flex justify-between font-mono text-[10px] uppercase text-muted-foreground">
          {d.months.map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>

      <StatCards stats={d.stats} />

      {/* Campaign cards (a board, not a table) */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold">{d.tableTitle}</h2>
          <div className="flex gap-1.5">
            {d.tabs.map((tab, i) => (
              <button key={tab} className={"rounded-full px-3.5 py-1.5 text-sm font-medium " + (i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>{tab}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {d.rows.map((r, i) => (
            <Card key={r.name}>
              <CardHeader className="flex-row items-start justify-between">
                <CardTitle className="text-lg">{r.name}</CardTitle>
                <Badge variant={r.status === d.active ? "success" : "outline"}>{r.status}</Badge>
              </CardHeader>
              <CardContent>
                <p className="font-display text-3xl font-bold">{r.reach}</p>
                <p className="font-mono text-[11px] uppercase text-muted-foreground">reach</p>
                <Progress value={[72, 38, 90][i] ?? 60} className="mt-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Channels + subscribers */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader><CardTitle>{d.trafficTitle}</CardTitle></CardHeader>
          <CardContent className="space-y-3.5">
            {d.traffic.map((row) => (
              <div key={row.label}>
                <div className="mb-1 flex justify-between text-sm"><span className="text-muted-foreground">{row.label}</span><span className="font-medium">{row.value}%</span></div>
                <div className="h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${(row.value / trafficMax) * 100}%` }} /></div>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card className="lg:col-span-2">
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
      </div>
    </Container>
  );
}
