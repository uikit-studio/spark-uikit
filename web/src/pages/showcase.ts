import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreElement } from "../components/base.js";
import { cardClass, containerClass } from "../components/styles.js";
import { store } from "../store.js";

const swatches: [string, string][] = [
  ["background", "bg-background"],
  ["card", "bg-card"],
  ["muted", "bg-muted"],
  ["primary", "bg-primary"],
  ["ink", "bg-ink"],
  ["brand-300", "bg-brand-300"],
  ["brand-600", "bg-brand-600"],
];

const heading = (text: string) =>
  html`<h2 class="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">${text}</h2>`;

@customElement("spark-showcase")
export class SparkShowcase extends StoreElement {
  render() {
    const s = store.t().showcase;
    const titleWords = s.title.split(" ");
    return html`
      <div>
        <div class="${containerClass} space-y-14 py-14">
          <header>
            <h1 class="font-display text-4xl font-bold tracking-tight">
              ${titleWords[0]} <spark-mark text=${titleWords.slice(1).join(" ")}></spark-mark>
            </h1>
            <p class="mt-2 max-w-xl text-muted-foreground">${s.sub}</p>
          </header>

          <section>
            ${heading(s.sections.colors)}
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
              ${swatches.map(
                ([name, cls]) => html`<div>
                  <div class="h-16 rounded-[--radius] border border-border ${cls}"></div>
                  <p class="mt-1.5 font-mono text-xs text-muted-foreground">${name}</p>
                </div>`,
              )}
            </div>
          </section>

          <section>
            ${heading(s.sections.type)}
            <div class="space-y-3">
              <p class="font-display text-5xl font-bold tracking-tight">${s.display}</p>
              <p class="font-display text-2xl font-bold">${s.heading}</p>
              <p class="text-base">${s.body}</p>
              <p class="font-mono text-sm text-muted-foreground">${s.mono}</p>
            </div>
          </section>

          <section>
            ${heading(s.sections.buttons)}
            <div class="flex flex-wrap items-center gap-3">
              <spark-button label="Primary"></spark-button>
              <spark-button variant="ink" label="Ink"></spark-button>
              <spark-button variant="outline" label="Outline"></spark-button>
              <spark-button variant="ghost" label="Ghost"></spark-button>
              <spark-button size="sm" label="Small"></spark-button>
              <spark-button size="lg" label="Large"></spark-button>
            </div>
          </section>

          <section>
            ${heading(s.sections.pills)}
            <div class="flex flex-wrap items-center gap-3">
              <spark-pill variant="solid" text="Solid"></spark-pill>
              <spark-pill variant="soft" text="Soft"></spark-pill>
              <spark-pill variant="brand" text="Brand"></spark-pill>
              <spark-pill variant="outline" text="Outline"></spark-pill>
              <spark-badge text="Neutral"></spark-badge>
              <spark-badge variant="brand" text="Brand"></spark-badge>
              <spark-badge variant="success" text="Success"></spark-badge>
              <spark-badge variant="outline" text="Outline"></spark-badge>
            </div>
          </section>

          <section>
            ${heading(s.sections.inputs)}
            <div class="max-w-sm"><spark-input placeholder="you@example.com"></spark-input></div>
          </section>

          <section>
            ${heading(s.sections.cards)}
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="${cardClass} p-6">
                <h3 class="font-display text-xl font-bold tracking-tight">Card title</h3>
                <p class="text-sm text-muted-foreground">A short description.</p>
                <p class="mt-3 text-sm text-muted-foreground">Body content goes here.</p>
              </div>
              <div class="${cardClass} p-6">
                <h3 class="mb-3 font-display text-xl font-bold tracking-tight">With an action</h3>
                <spark-button size="sm" label="Do it"></spark-button>
              </div>
            </div>
          </section>
        </div>

        <spark-marquee .items=${store.t().marquee}></spark-marquee>
      </div>
    `;
  }
}
