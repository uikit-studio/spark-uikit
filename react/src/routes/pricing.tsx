import { Check } from "lucide-react";
import { Button } from "../components/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Container } from "../components/container";
import { Mark } from "../components/mark";
import { Pill } from "../components/pill";
import { Footer } from "../blocks/footer";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

export function Pricing() {
  const { t } = useI18n();
  const p = t.pricing;
  return (
    <div>
      <section className="dotted">
        <Container className="py-20 text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
            {p.heading} <Mark>{p.headingMark}</Mark>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">{p.sub}</p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid items-start gap-6 lg:grid-cols-3">
            {p.tiers.map((tier, i) => {
              const popular = i === 1;
              return (
                <Card
                  key={tier.name}
                  className={cn(popular && "ring-2 ring-primary lg:-translate-y-3")}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      {popular && <Pill variant="brand">{p.popular}</Pill>}
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.blurb}</p>
                    <p className="mt-4 font-display text-5xl font-bold tracking-tight">
                      {tier.price}
                      <span className="font-sans text-base font-normal text-muted-foreground">{p.period}</span>
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant={popular ? "primary" : "outline"} className="w-full">
                      {p.cta}
                    </Button>
                    <ul className="space-y-2 pt-2">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 shrink-0 text-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
