import { LitElement, html, css } from "lit-element";

class TheGame extends LitElement {
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
      <div>hol the game a</div>
    `;
  }
}
// Register the new element with the browser.
customElements.define("the-game", TheGame);
