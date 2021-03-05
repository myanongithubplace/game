import { LitElement, html, css } from "lit-element";

class BottomDecorator extends LitElement {
  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  static get styles() {
    return [
      css`
        .decorator {
          height: 3.5vh;
          width: 45%;

          background-size: 10vh;
          background-image: url("/decorator.png");
          opacity: 0.685;
          animation: appearlate 3s;
          animation-timing-function: cubic-bezier(1, 0.01, 0.62, 0.74);

          margin: auto;
        }
        @keyframes appearlate {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.685;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="decorator"></div>
    `;
  }
}
// Register the new element with the browser.
customElements.define("bottom-decorator", BottomDecorator);
