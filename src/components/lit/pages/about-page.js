import { LitElement, html, css } from "lit-element";

class AboutPage extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      css`
        :host {
        }
      `,
    ];
  }

  render() {
    return html`
      <div>holabouta</div>
    `;
  }
}
// Register the new element with the browser.
customElements.define("about-page", AboutPage);
