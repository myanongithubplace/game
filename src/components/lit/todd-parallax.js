import { LitElement, html, css } from "lit-element";

class ToddParallax extends LitElement {
  static get properties() {
    return {
      urlimg: { type: String },
      button: { type: String },
      started: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.started = false;
  }

  static get styles() {
    return [
      css`
        :host {
          height: 100%;
          padding: 15% 0;

          font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
          font-size: 40px;
        }
        .todd-parallax {
          height: 100%;
          -webkit-transition: 0.8s ease-in-out;
          -moz-transition: 0.8s ease-in-out;
          -o-transition: 0.8s ease-in-out;
          transition: 0.8s ease-in-out;
        }
        img {
          padding: 25% 0 15%;
          width: 100%;
        }
        .shinny-button {
          color: white;
          text-align: center;
          cursor: -webkit-grab;
          cursor: grab;
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          -khtml-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        .glow {
          font-size: 80px;
          text-align: center;
          -webkit-animation: glow 0.8s ease-in-out infinite alternate;
          -moz-animation: glow 0.8s ease-in-out infinite alternate;
          animation: glow 0.8s ease-in-out infinite alternate;
        }

        @-webkit-keyframes glow {
          from {
            text-shadow: 0 0 10px #ffffffc3, 0 0 20px #ffffffc3,
              0 0 30px #ff355e, 0 0 40px #ff355e, 0 0 50px #ff355e,
              0 0 60px #ff355e, 0 0 70px #ff355e;
          }

          to {
            text-shadow: 0 0 20px #ffffffc3, 0 0 30px #ff355e, 0 0 40px #ff355e,
              0 0 50px #ff355e, 0 0 60px #ff355e, 0 0 70px #ff355e,
              0 0 80px #ff355e;
          }
        }
        /*Clicked is when the start button has been pushed*/
        .clicked {
          transform: translate(0px, -100%);
          transform-origin: 100% 100% 100px;
          -webkit-transform-origin: 10px;
          -moz-transform-origin: 10px;
          -o-transform-origin: 10px;
        }
        @media screen and (min-width: 560px) {
          :host {
            padding: 0;
          }
          img {
            padding: 0;
          }
          .shinny-button {
            position: absolute;
            top: 80%;
            width: 100%;
            text-align: center;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="todd-parallax ${this.started ? `clicked` : `nothing`} ">
        <img src="${this.urlimg}" />
        <div class="shinny-button glow" @click="${this.handleClick}">
          ${this.button}
        </div>
      </div>
    `;
  }
  handleClick() {
    let event = new CustomEvent("started", {
      detail: {
        message: "change the background",
      },
    });
    this.dispatchEvent(event);
    this.started = true;
  }
}
// Register the new element with the browser.
customElements.define("todd-parallax", ToddParallax);
