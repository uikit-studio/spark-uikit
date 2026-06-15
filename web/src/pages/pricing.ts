import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreElement } from "../components/base.js";
import { cardClass, containerClass } from "../components/styles.js";
import { store } from "../store.js";

const check = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="shrink-0 text-primary"
><path d="M20 6 9 17l-5-5"></path></svg>`;

@customElement("spark-pricing")
export class SparkPricing extends StoreElement {
  render() {
    const p = store.t().pricing;
    return html`
      <section class="dotted">
        <div class="${containerClass} py-20 text-center">
          <h1 class="font-display text-5xl font-bold tracking-tight sm:text-6xl">
            ${p.heading} <spark-mark text=${p.headingMark}></spark-mark>
          </h1>
          <p class="mx-auto mt-4 max-w-md text-muted-foreground">${p.sub}</p>
        </div>
      </section>

      <section class="pb-20">
        <div class="${containerClass}">
          <div class="grid items-start gap-6 lg:grid-cols-3">
            ${p.tiers.map(
              (tier, i) => html`<div
                class="${cardClass} ${i === 1 ? "ring-2 ring-primary lg:-translate-y-3" : ""} p-6"
              >
                <div class="flex items-center justify-between">
                  <h3 class="font-display text-2xl font-bold tracking-tight">${tier.name}</h3>
                  ${i === 1 ? html`<spark-pill variant="brand" text=${p.popular} class="inline-flex"></spark-pill>` : ""}
                </div>
                <p class="mt-1 text-sm text-muted-foreground">${tier.blurb}</p>
                <p class="mt-4 font-display text-5xl font-bold tracking-tight">
                  ${tier.price}<span class="font-sans text-base font-normal text-muted-foreground">${p.period}</span>
                </p>
                <div class="mt-5">
                  <spark-button
                    class="block [&>button]:w-full"
                    variant=${i === 1 ? "primary" : "outline"}
                    label=${p.cta}
                  ></spark-button>
                </div>
                <ul class="mt-4 space-y-2">
                  ${tier.features.map(
                    (f) => html`<li class="flex items-center gap-2 text-sm">${check}${f}</li>`,
                  )}
                </ul>
              </div>`,
            )}
          </div>
        </div>
      </section>

      <spark-footer></spark-footer>
    `;
  }
}
