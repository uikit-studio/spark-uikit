import { ArrowRight } from "lucide-react";
import { Button } from "../components/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Container } from "../components/container";
import { Mark } from "../components/mark";
import { Marquee } from "../components/marquee";
import { Pill } from "../components/pill";
import { Footer } from "../blocks/footer";
import { useI18n } from "../i18n";

export function Landing() {
  const { t } = useI18n();
  return (
    <div>
      {/* Hero */}
      <section className="dotted relative overflow-hidden">
        <Container className="py-24 text-center sm:py-32">
          <Pill variant="brand" className="mb-6">
            ✦ {t.hero.eyebrow}
          </Pill>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            {t.hero.titleA} <Mark>{t.hero.titleMark}</Mark> {t.hero.titleB}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{t.hero.body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button size="lg">
              {t.hero.primary} <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </Button>
            <Button size="lg" variant="outline">
              {t.hero.secondary}
            </Button>
          </div>
          <p className="mt-6 font-mono text-xs uppercase tracking-wide text-muted-foreground">
            {t.hero.stat}
          </p>

          {/* Browser mock */}
          <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card text-start shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-brand-400" />
              <span className="h-3 w-3 rounded-full bg-brand-200" />
              <span className="h-3 w-3 rounded-full bg-muted" />
            </div>
            <div className="bg-gradient-to-br from-brand-100 to-card p-10">
              <div className="h-3 w-28 rounded-full bg-foreground/80" />
              <div className="mt-4 h-8 w-2/3 rounded-lg bg-foreground/90" />
              <div className="mt-2 h-8 w-1/2 rounded-lg bg-primary" />
              <div className="mt-6 flex gap-2">
                <div className="h-9 w-28 rounded-full bg-primary" />
                <div className="h-9 w-28 rounded-full border-2 border-foreground" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Marquee items={t.marquee} />

      {/* Features */}
      <section>
        <Container className="py-20">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t.features.heading} <Mark>{t.features.headingMark}</Mark>
            </h2>
            <p className="mt-3 text-muted-foreground">{t.features.sub}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {t.features.items.map((f, i) => (
              <Card key={f.title} className="transition-transform hover:-translate-y-1">
                <CardHeader>
                  <Pill variant="soft" className="mb-3 w-fit">{String(i + 1).padStart(2, "0")}</Pill>
                  <CardTitle>{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Dark bento */}
      <section className="py-20">
        <Container>
          <div className="rounded-[var(--radius-lg)] bg-ink p-10 text-ink-foreground sm:p-16">
            <h2 className="max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {t.bento.heading} <Mark>{t.bento.headingMark}</Mark>
            </h2>
            <p className="mt-3 max-w-md text-ink-foreground/70">{t.bento.sub}</p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {t.bento.items.map((item) => (
                <div
                  key={item}
                  className="rounded-[var(--radius)] border border-white/10 bg-white/5 p-5 font-display font-semibold"
                >
                  <span className="text-primary">✦</span>
                  <p className="mt-3 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <div className="dotted rounded-[var(--radius-lg)] border border-border bg-card p-12 text-center sm:p-20">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
              {t.cta.heading} <Mark>{t.cta.headingMark}</Mark>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">{t.cta.body}</p>
            <Button size="lg" className="mt-8">
              {t.cta.button} <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </Button>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{t.cta.note}</p>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
