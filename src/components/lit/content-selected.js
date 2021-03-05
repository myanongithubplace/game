import { LitElement, html, css } from "lit-element";

import "@/components/lit/pages/about-page.js";
import "@/components/lit/pages/the-game.js";
import "@/components/lit/pages/todd-page.js";

class ContentSelected extends LitElement {
  static get properties() {
    return {
      selection: { type: String },
    };
  }

  constructor() {
    super();
    this.selection = "";
  }

  static get styles() {
    return [css``];
  }

  render() {
    const gamePage = () =>
      html`
        <the-game></the-game>
      `;
    const toddPage = () =>
      html`
        <todd-page></todd-page>
      `;
    const aboutPage = () =>
      html`
        <about-page></about-page>
      `;
    return html`
      <div class="content-selected">
        a${this.selection}a ${this.compGame() ? gamePage() : ""}
        ${this.compTodd() ? toddPage() : ""}
        ${this.compAbout() ? aboutPage() : ""}
      </div>
    `;
  }
  compGame() {
    return this.selection == "game";
  }
  compTodd() {
    return this.selection == "todd";
  }
  compAbout() {
    return this.selection == "about";
  }
}
// Register the new element with the browser.
customElements.define("content-selected", ContentSelected);
