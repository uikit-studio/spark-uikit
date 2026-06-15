import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreElement } from "../components/base.js";
import { cardClass, containerClass } from "../components/styles.js";
import { store } from "../store.js";

@customElement("spark-landing")
export class SparkLanding extends StoreElement {
  render() {
    const t = store.t();
    const pad = (i: number) => String(i + 1).padStart(2, "0");
    return html`
      <section class="dotted relative overflow-hidden">
        <div class="${containerClass} py-24 text-center sm:py-32">
          <spark-pill variant="brand" text=${"✦ " + t.hero.eyebrow} class="mb-6 inline-flex"></spark-pill>
          <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            ${t.hero.titleA} <spark-mark text=${t.hero.titleMark}></spark-mark> ${t.hero.titleB}
          </h1>
          <p class="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">${t.hero.body}</p>
          <div class="mt-9 flex flex-wrap justify-center gap-3">
            <spark-button size="lg" label=${t.hero.primary} arrow></spark-button>
            <spark-button size="lg" variant="outline" label=${t.hero.secondary}></spark-button>
          </div>
          <p class="mt-6 font-mono text-xs uppercase tracking-wide text-muted-foreground">${t.hero.stat}</p>

          <div class="mx-auto mt-16 max-w-3xl overflow-hidden rounded-[--radius-lg] border border-border bg-card text-start shadow-[var(--shadow-card)]">
            <div class="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span class="h-3 w-3 rounded-full bg-brand-400"></span>
              <span class="h-3 w-3 rounded-full bg-brand-200"></span>
              <span class="h-3 w-3 rounded-full bg-muted"></span>
            </div>
            <div class="bg-gradient-to-br from-brand-100 to-card p-10">
              <div class="h-3 w-28 rounded-full bg-foreground/80"></div>
              <div class="mt-4 h-8 w-2/3 rounded-lg bg-foreground/90"></div>
              <div class="mt-2 h-8 w-1/2 rounded-lg bg-primary"></div>
              <div class="mt-6 flex gap-2">
                <div class="h-9 w-28 rounded-full bg-primary"></div>
                <div class="h-9 w-28 rounded-full border-2 border-foreground"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <spark-marquee .items=${t.marquee}></spark-marquee>

      <section>
        <div class="${containerClass} py-20">
          <div class="mb-12 max-w-2xl">
            <h2 class="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              ${t.features.heading} <spark-mark text=${t.features.headingMark}></spark-mark>
            </h2>
            <p class="mt-3 text-muted-foreground">${t.features.sub}</p>
          </div>
          <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            ${t.features.items.map(
              (f, i) => html`<div class="${cardClass} p-6 transition-transform hover:-translate-y-1">
                <spark-pill variant="soft" text=${pad(i)} class="mb-3 inline-flex"></spark-pill>
                <h3 class="font-display text-xl font-bold tracking-tight">${f.title}</h3>
                <p class="mt-2 text-sm text-muted-foreground">${f.body}</p>
              </div>`,
            )}
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="${containerClass}">
          <div class="rounded-[--radius-lg] bg-ink p-10 text-ink-foreground sm:p-16">
            <h2 class="max-w-xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
              ${t.bento.heading} <spark-mark text=${t.bento.headingMark}></spark-mark>
            </h2>
            <p class="mt-3 max-w-md text-ink-foreground/70">${t.bento.sub}</p>
            <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              ${t.bento.items.map(
                (item) => html`<div class="rounded-[--radius] border border-white/10 bg-white/5 p-5 font-display font-semibold">
                  <span class="text-primary">✦</span>
                  <p class="mt-3 text-sm">${item}</p>
                </div>`,
              )}
            </div>
          </div>
        </div>
      </section>

      <section class="pb-24">
        <div class="${containerClass}">
          <div class="dotted rounded-[--radius-lg] border border-border bg-card p-12 text-center sm:p-20">
            <h2 class="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-6xl">
              ${t.cta.heading} <spark-mark text=${t.cta.headingMark}></spark-mark>
            </h2>
            <p class="mx-auto mt-4 max-w-md text-muted-foreground">${t.cta.body}</p>
            <div class="mt-8 flex justify-center">
              <spark-button size="lg" label=${t.cta.button} arrow></spark-button>
            </div>
            <p class="mt-4 font-mono text-xs text-muted-foreground">${t.cta.note}</p>
          </div>
        </div>
      </section>

      <spark-footer></spark-footer>
    `;
  }
}
