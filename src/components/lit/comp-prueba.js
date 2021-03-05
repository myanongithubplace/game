import { LitElement, html, css} from 'lit-element';

class CompPrueba extends LitElement {
  
  static get properties() { return {
  }}  

  constructor() {
    super();
  }

  static get styles() {
    return [ css`
    :host{}`
      ];
  }

  render(){
    return html`<div>hola</div>`;
  }
}
// Register the new element with the browser.
customElements.define('comp-prueba', CompPrueba);