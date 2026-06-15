import { LitElement } from "lit";
import { store } from "../store.js";

/** Light-DOM Lit element that re-renders whenever the store (lang/theme/route) changes. */
export class StoreElement extends LitElement {
  private _unsub?: () => void;
  protected createRenderRoot() {
    return this;
  }
  connectedCallback(): void {
    super.connectedCallback();
    this._unsub = store.subscribe(() => this.requestUpdate());
  }
  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._unsub?.();
  }
}
