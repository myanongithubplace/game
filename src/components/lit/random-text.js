import { LitElement, html, css } from "lit-element";

class RandomText extends LitElement {
  static get properties() {
    return {
      string: { type: Array },
    };
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      css`
        .text {
          width: 100%;
          text-align: center;

          opacity: 1;
          animation: appearlate 2s;
          animation-timing-function: cubic-bezier(1, 0.01, 0.62, 0.74);
        }
        @keyframes appearlate {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="text">${this.strings[0]}</div>
    `;
  }
}
// Register the new element with the browser.
customElements.define("random-text", RandomText);
