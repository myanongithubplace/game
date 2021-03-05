import { LitElement, html, css } from "lit-element";

class TopDecorator extends LitElement {
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
        .decorator {
          height: 3.5vh;
          width: 40%;

          background-size: 10vh;
          background-image: url("/decorator.png");
          opacity: 0.685;
          -webkit-transform: scaleY(-1);
          -moz-transform: scaleY(-1);
          -o-transform: scaleY(-1);
          transform: scaleY(-1);
          animation: appearlate 3s;
          animation-timing-function: linear;

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
customElements.define("top-decorator", TopDecorator);
