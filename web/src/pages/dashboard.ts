import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreElement } from "../components/base.js";
import { cardClass, containerClass } from "../components/styles.js";
import { store } from "../store.js";

@customElement("spark-dashboard")
export class SparkDashboard extends StoreElement {
  render() {
    const d = store.t().dashboard;
    return html`
      <div class="${containerClass} py-8">
        <div class="flex gap-6">
          <aside class="hidden w-48 shrink-0 lg:block">
            <nav class="space-y-1 text-sm font-medium">
              ${d.nav.map(
                (item, i) => html`<a
                  href="#"
                  class="block rounded-full px-4 py-2 ${i === 0
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted"}"
                  >${item}</a
                >`,
              )}
            </nav>
          </aside>

          <main class="min-w-0 flex-1 space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="font-display text-3xl font-bold tracking-tight">${d.title}</h1>
                <p class="text-sm text-muted-foreground">${d.subtitle}</p>
              </div>
              <spark-button size="sm" label=${d.action}></spark-button>
            </div>

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              ${d.stats.map(
                (s) => html`<div class="${cardClass} p-6">
                  <p class="font-mono text-xs uppercase tracking-wide text-muted-foreground">${s.label}</p>
                  <p class="mt-2 font-display text-3xl font-bold tracking-tight">${s.value}</p>
                  <p class="mt-1 text-xs font-bold ${s.delta.startsWith("-") ? "text-rose-500" : "text-success"}">
                    ${s.delta}
                  </p>
                </div>`,
              )}
            </div>

            <div class="${cardClass}">
              <div class="flex items-center justify-between p-6">
                <h3 class="font-display text-xl font-bold tracking-tight">${d.tableTitle}</h3>
                <spark-badge variant="brand" text="live"></spark-badge>
              </div>
              <div class="px-6 pb-6">
                <table class="w-full text-start text-sm">
                  <thead class="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    <tr>
                      ${d.cols.map((c) => html`<th class="pb-3 text-start font-medium">${c}</th>`)}
                    </tr>
                  </thead>
                  <tbody>
                    ${d.rows.map(
                      (r) => html`<tr class="border-t border-border">
                        <td class="py-3 font-medium">${r.name}</td>
                        <td class="py-3">${r.reach}</td>
                        <td class="py-3">
                          <spark-badge variant=${r.status === d.active ? "brand" : "outline"} text=${r.status}></spark-badge>
                        </td>
                      </tr>`,
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    `;
  }
}
