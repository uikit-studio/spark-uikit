import type { ReactNode } from "react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/card";
import { Container } from "../components/container";
import { Input } from "../components/input";
import { Mark } from "../components/mark";
import { Marquee } from "../components/marquee";
import { Pill } from "../components/pill";
import { useI18n } from "../i18n";

export function Showcase() {
  const { t } = useI18n();
  const s = t.showcase;
  return (
    <div>
      <Container className="space-y-14 py-14">
        <header>
          <h1 className="font-display text-4xl font-bold tracking-tight">
            {s.title.split(" ")[0]} <Mark>{s.title.split(" ").slice(1).join(" ")}</Mark>
          </h1>
          <p className="mt-2 max-w-xl text-muted-foreground">{s.sub}</p>
        </header>

        <Section title={s.sections.colors}>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            {[
              ["background", "bg-background"],
              ["card", "bg-card"],
              ["muted", "bg-muted"],
              ["primary", "bg-primary"],
              ["ink", "bg-ink"],
              ["brand-300", "bg-brand-300"],
              ["brand-600", "bg-brand-600"],
            ].map(([name, cls]) => (
              <div key={name}>
                <div className={`h-16 rounded-[var(--radius)] border border-border ${cls}`} />
                <p className="mt-1.5 font-mono text-xs text-muted-foreground">{name}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={s.sections.type}>
          <div className="space-y-3">
            <p className="font-display text-5xl font-bold tracking-tight">{s.display}</p>
            <p className="font-display text-2xl font-bold">{s.heading}</p>
            <p className="text-base">{s.body}</p>
            <p className="font-mono text-sm text-muted-foreground">{s.mono}</p>
            <p className="text-3xl font-bold">
              <Mark>{s.sections.type}</Mark>
            </p>
          </div>
        </Section>

        <Section title={s.sections.buttons}>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="ink">Ink</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button disabled>Disabled</Button>
          </div>
        </Section>

        <Section title={s.sections.pills}>
          <div className="flex flex-wrap items-center gap-3">
            <Pill variant="solid">Solid</Pill>
            <Pill variant="soft">Soft</Pill>
            <Pill variant="brand">Brand</Pill>
            <Pill variant="outline">Outline</Pill>
            <Badge>Neutral</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </Section>

        <Section title={s.sections.inputs}>
          <div className="max-w-sm space-y-3">
            <Input placeholder="you@example.com" />
            <Input placeholder="Disabled" disabled />
          </div>
        </Section>

        <Section title={s.sections.cards}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>A short description.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Body content goes here.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>With an action</CardTitle>
              </CardHeader>
              <CardContent>
                <Button size="sm">Do it</Button>
              </CardContent>
            </Card>
          </div>
        </Section>
      </Container>

      <Marquee items={t.marquee} />
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}
