import { LitElement, html, css } from "lit-element";

import "@/components/lit/content-selected.js";

class MyMenu extends LitElement {
  static get properties() {
    return {
      selected: { type: String },
    };
  }

  constructor() {
    super();
    this.selected = "game";
  }

  static get styles() {
    return [
      css`
        .menu {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 10vh;
          gap: 1px 1px;
          grid-template-areas: ". . .";
          opacity: 1;
          animation: appearlate 6s;
          animation-timing-function: cubic-bezier(1, -0.93, 0.98, 0.44);
        }
        @keyframes appearlate {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .menu nav {
          color: #f8eadd;
          font-size: 24px;
          padding: 10px 10px 0;
        }
        .menu nav:first-child {
          padding: 10px 10px 10px 20px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="menu">
        <nav class="todd">
          <a @click="${() => this.changePage("todd")}">todd</a>
        </nav>
        <nav class="game">
          <a @click="${() => this.changePage("game")}">game</a>
        </nav>
        <nav class="about">
          <a @click="${() => this.changePage("about")}">about</a>
        </nav>
      </div>
      <content-selected selection=${this.selected}></content-selected>
    `;
  }
  changePage(newPage) {
    if (newPage.localeCompare(this.selected)) {
      this.selected = newPage;
    }
  }
}
// Register the new element with the browser.
customElements.define("my-menu", MyMenu);
