import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreElement } from "./base.js";
import { containerClass } from "./styles.js";
import { store } from "../store.js";

@customElement("spark-footer")
export class SparkFooter extends StoreElement {
  render() {
    const t = store.t();
    return html`<footer class="border-t border-border bg-background py-12">
      <div class="${containerClass} flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div class="flex items-center gap-2">
          <span class="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground">⚡</span>
          <span class="font-display text-lg font-bold">Spark</span>
        </div>
        <p class="text-sm text-muted-foreground">${t.footer.tagline}</p>
        <nav class="flex gap-5 text-sm text-muted-foreground">
          ${t.footer.links.map((l) => html`<a href="#" class="hover:text-foreground">${l}</a>`)}
        </nav>
      </div>
      <div class="${containerClass} mt-8 text-center font-mono text-xs text-muted-foreground">${t.footer.rights}</div>
    </footer>`;
  }
}
