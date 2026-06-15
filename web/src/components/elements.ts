import { html, LitElement, nothing, type TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  badgeClass,
  buttonClass,
  pillClass,
  inputClass,
  type BadgeVariant,
  type ButtonVariant,
  type PillVariant,
  type Size,
} from "./styles.js";

/** Light-DOM base so global Tailwind classes apply to these custom elements. */
class Light extends LitElement {
  protected createRenderRoot() {
    return this;
  }
}

const arrowIcon = html`<svg
  width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="rtl:rotate-180"
><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>`;

@customElement("spark-button")
export class SparkButton extends Light {
  @property() variant: ButtonVariant = "primary";
  @property() size: Size = "md";
  @property() label = "";
  @property({ type: Boolean }) arrow = false;
  render(): TemplateResult {
    return html`<button class=${buttonClass(this.variant, this.size)}>
      ${this.label}${this.arrow ? arrowIcon : nothing}
    </button>`;
  }
}

@customElement("spark-mark")
export class SparkMark extends Light {
  @property() text = "";
  render() {
    return html`<span class="mark rounded-sm">${this.text}</span>`;
  }
}

@customElement("spark-pill")
export class SparkPill extends Light {
  @property() variant: PillVariant = "soft";
  @property() text = "";
  render() {
    return html`<span class=${pillClass(this.variant)}>${this.text}</span>`;
  }
}

@customElement("spark-badge")
export class SparkBadge extends Light {
  @property() variant: BadgeVariant = "neutral";
  @property() text = "";
  render() {
    return html`<span class=${badgeClass(this.variant)}>${this.text}</span>`;
  }
}

@customElement("spark-input")
export class SparkInput extends Light {
  @property() placeholder = "";
  render() {
    return html`<input class=${inputClass} placeholder=${this.placeholder} />`;
  }
}

@customElement("spark-marquee")
export class SparkMarquee extends Light {
  @property({ attribute: false }) items: string[] = [];
  render() {
    const row = [...this.items, ...this.items];
    return html`<div class="overflow-hidden border-y-2 border-foreground bg-foreground py-3 text-background">
      <div class="spark-marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        ${row.map(
          (item) => html`<span class="flex items-center gap-8 font-mono text-sm font-medium uppercase tracking-widest"
            >${item}<span class="text-primary">✦</span></span
          >`,
        )}
      </div>
    </div>`;
  }
}
