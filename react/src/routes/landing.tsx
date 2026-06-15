import { ArrowRight } from "lucide-react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Mark } from "../components/mark";
import { Marquee } from "../components/marquee";
import { Pill } from "../components/pill";
import { Reveal } from "../components/reveal";
import { Footer } from "../blocks/footer";
import { useI18n } from "../i18n";

export function Landing() {
  const { t } = useI18n();
  return (
    <div>
      {/* Editorial asymmetric hero */}
      <section className="dotted relative overflow-hidden border-b border-border">
        <Container className="py-20 sm:py-28">
          <Reveal>
            <Pill variant="brand" className="mb-8">✦ {t.hero.eyebrow}</Pill>
          </Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <Reveal as="h1" className="font-display text-6xl font-bold leading-[0.92] tracking-tight sm:text-8xl">
              {t.hero.titleA} <Mark>{t.hero.titleMark}</Mark> {t.hero.titleB}
            </Reveal>
            <Reveal delay={120} className="lg:pb-3">
              <p className="max-w-sm text-lg text-muted-foreground">{t.hero.body}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button size="lg" className="transition-transform hover:-translate-y-0.5">
                  {t.hero.primary} <ArrowRight className="h-5 w-5 rtl:rotate-180" />
                </Button>
                <Button size="lg" variant="outline">{t.hero.secondary}</Button>
              </div>
              <p className="mt-6 font-mono text-xs uppercase tracking-wide text-muted-foreground">{t.hero.stat}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Marquee items={t.marquee} />

      {/* Metrics strip */}
      <section className="border-b border-border">
        <Container className="grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">
          {t.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="text-center">
              <div className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">{m.value}</div>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{m.label}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      {/* Numbered editorial list */}
      <section>
        <Container className="py-20">
          <Reveal as="h2" className="mb-12 max-w-3xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.features.heading} <Mark>{t.features.headingMark}</Mark>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {t.features.items.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="group grid items-baseline gap-3 py-7 transition-colors hover:bg-muted/40 sm:grid-cols-[auto_1fr_1.5fr] sm:gap-8">
                  <span className="font-display text-3xl font-bold text-primary transition-transform group-hover:translate-x-1 sm:text-5xl rtl:group-hover:-translate-x-1">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{f.title}</h3>
                  <p className="text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works — 3 steps */}
      <section className="border-y border-border bg-muted/40">
        <Container className="py-20">
          <Reveal as="h2" className="mb-12 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.steps.heading} <Mark>{t.steps.headingMark}</Mark>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {t.steps.items.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="h-full rounded-[var(--radius-lg)] border border-border bg-card p-7 transition-transform hover:-translate-y-1">
                  <span className="font-display text-5xl font-bold text-primary/30">{s.n}</span>
                  <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Giant pull-quote */}
      <section className="bg-ink py-24 text-ink-foreground">
        <Container className="max-w-4xl text-center">
          <Reveal>
            <p className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              “{t.quote.text}”
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary font-display font-bold text-primary-foreground">
                {t.quote.author.split(" ").map((w) => w[0]).join("")}
              </span>
              <div className="text-start">
                <p className="font-semibold">{t.quote.author}</p>
                <p className="font-mono text-xs uppercase tracking-wide text-ink-foreground/60">{t.quote.role}</p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <Container>
          <Reveal as="h2" className="mb-10 max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {t.bento.heading} <Mark>{t.bento.headingMark}</Mark>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {t.bento.items.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <div
                  className={
                    "h-full rounded-[var(--radius)] border border-border p-6 font-display font-semibold transition-transform hover:-translate-y-1 " +
                    (i % 3 === 0 ? "bg-primary text-primary-foreground" : "bg-card")
                  }
                >
                  <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-6 text-lg leading-tight">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <Container>
          <Reveal>
            <div className="dotted rounded-[var(--radius-lg)] border border-border bg-card p-12 text-center sm:p-20">
              <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
                {t.cta.heading} <Mark>{t.cta.headingMark}</Mark>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">{t.cta.body}</p>
              <Button size="lg" className="mt-8 transition-transform hover:-translate-y-0.5">
                {t.cta.button} <ArrowRight className="h-5 w-5 rtl:rotate-180" />
              </Button>
              <p className="mt-4 font-mono text-xs text-muted-foreground">{t.cta.note}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
