import { LitElement, html, css } from "lit-element";
import "@/components/lit/random-text.js";
import "@/components/lit/bottom-decorator.js";

class MyBar extends LitElement {
  static get properties() {
    return {
      decoratorimg: { type: String },
      listOfPhrases: { type: Array },
    };
  }

  constructor() {
    super();
    this.listOfPhrases = [
      "Game is knowing where you are and knowing how to work within it",
      "asad asd asd ddsad as ",
    ];
  }

  static get styles() {
    return [
      css`
        :host {
          color: #f8eadd;
          font-size: 24px;
          width: 100%;
        }
        .my-bar {
          padding-top: 10px;
        }
        .phrases {
          min-height: 6vh;
          margin: 0 8px;
        }
        .current-phrase {
          display: inline-block;
          width: 100%;
          min-height: 5vh;
          margin-bottom: 10px;

          text-align: center;

          font-family: "Courier New", Courier, monospace;
        }

        @media screen and (min-width: 560px) {
          .my-bar {
            padding-top: 13px;
          }
          .phrases {
            margin: 0 20px;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="my-bar">
        <div class="phrases">
          <div class="current-phrase">
            <random-text .strings=${this.listOfPhrases}></random-text>
          </div>
          <bottom-decorator
            decoratorimg="${this.decoratorimg}"
          ></bottom-decorator>
        </div>
      </div>
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-bar", MyBar);
