import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Container } from "../components/container";
import { StatCards } from "../blocks/stat-cards";
import { useI18n } from "../i18n";

export function Dashboard() {
  const { t } = useI18n();
  const d = t.dashboard;
  return (
    <Container className="py-8">
      <div className="flex gap-6">
        <aside className="hidden w-48 shrink-0 lg:block">
          <nav className="space-y-1 text-sm font-medium">
            {d.nav.map((item, i) => (
              <a
                key={item}
                href="#"
                className={
                  "block rounded-full px-4 py-2 " +
                  (i === 0 ? "bg-foreground text-background" : "text-muted-foreground hover:bg-muted")
                }
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold tracking-tight">{d.title}</h1>
              <p className="text-sm text-muted-foreground">{d.subtitle}</p>
            </div>
            <Button size="sm">{d.action}</Button>
          </div>

          <StatCards stats={d.stats} />

          <Card>
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>{d.tableTitle}</CardTitle>
              <Badge variant="brand">live</Badge>
            </CardHeader>
            <CardContent>
              <table className="w-full text-start text-sm">
                <thead className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    {d.cols.map((c) => (
                      <th key={c} className="pb-3 text-start font-medium">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.rows.map((r) => (
                    <tr key={r.name} className="border-t border-border">
                      <td className="py-3 font-medium">{r.name}</td>
                      <td className="py-3">{r.reach}</td>
                      <td className="py-3">
                        <Badge variant={r.status === d.active ? "brand" : "outline"}>{r.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </main>
      </div>
    </Container>
  );
}
