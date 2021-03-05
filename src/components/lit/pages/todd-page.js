import { LitElement, html, css } from "lit-element";

class ToddPage extends LitElement {
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
      <div>hola todd</div>
    `;
  }
}
// Register the new element with the browser.
customElements.define("todd-page", ToddPage);
