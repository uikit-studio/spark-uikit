import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { StoreElement } from "./components/base.js";
import { containerClass } from "./components/styles.js";
import { store } from "./store.js";

const moon = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>`;
const sun = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle>
  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></svg>`;

const NAV = [
  { to: "/", key: "landing" },
  { to: "/pricing", key: "pricing" },
  { to: "/dashboard", key: "dashboard" },
  { to: "/components", key: "components" },
] as const;

@customElement("spark-app")
export class SparkApp extends StoreElement {
  private go(e: Event, path: string) {
    e.preventDefault();
    store.navigate(path);
    window.scrollTo(0, 0);
  }

  private page() {
    switch (store.route) {
      case "/pricing":
        return html`<spark-pricing></spark-pricing>`;
      case "/dashboard":
        return html`<spark-dashboard></spark-dashboard>`;
      case "/components":
        return html`<spark-showcase></spark-showcase>`;
      default:
        return html`<spark-landing></spark-landing>`;
    }
  }

  render() {
    const t = store.t();
    return html`<div class="min-h-screen bg-background text-foreground">
      <header class="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div class="${containerClass} flex h-16 items-center justify-between gap-3">
          <a href="/" @click=${(e: Event) => this.go(e, "/")} class="flex items-center gap-2 font-display text-lg font-bold">
            <span class="grid h-8 w-8 place-items-center rounded-xl bg-primary text-primary-foreground">⚡</span>
            Spark
          </a>
          <nav class="hidden items-center gap-1 md:flex">
            ${NAV.map(
              (n) => html`<a
                href=${n.to}
                @click=${(e: Event) => this.go(e, n.to)}
                class="rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${store.route === n.to
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"}"
                >${t.nav[n.key]}</a
              >`,
            )}
          </nav>
          <div class="flex items-center gap-2">
            <div class="flex items-center rounded-full border border-border p-0.5 font-mono text-xs">
              <button
                @click=${() => store.setLang("en")}
                class="rounded-full px-2 py-1 ${store.lang === "en" ? "bg-foreground text-background" : "text-muted-foreground"}"
              >
                EN
              </button>
              <button
                @click=${() => store.setLang("ar")}
                class="rounded-full px-2 py-1 ${store.lang === "ar" ? "bg-foreground text-background" : "text-muted-foreground"}"
              >
                ع
              </button>
            </div>
            <button
              @click=${() => store.toggleTheme()}
              class="rounded-full border border-border p-2 text-foreground hover:bg-muted"
              aria-label="Toggle dark mode"
            >
              ${store.dark ? sun : moon}
            </button>
            <spark-button class="hidden sm:inline-flex" size="sm" label=${t.nav.cta}></spark-button>
          </div>
        </div>
      </header>
      ${this.page()}
    </div>`;
  }
}
