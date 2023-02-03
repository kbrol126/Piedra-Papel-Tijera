import { state } from "../../state";

export function eleccionCircularComp() {
  class EleccionClass extends HTMLElement {
    shadow: ShadowRoot | null;
    constructor() {
      super();
      this.render();
    }

    render() {
      const imagePiedra = require("url:../../imagenes/piedracircular.svg");
      const imagePapel = require("url:../../imagenes/papelcircular.svg");
      const imageTijera = require("url:../../imagenes/tijeracircular.svg");
      var texto: any = this.getAttribute("src");

      var eleccionEl = document.createElement("img");
      if (texto == "piedra") {
        eleccionEl.setAttribute("src", imagePiedra);
        this.setAttribute("id", "piedra");
        this.addEventListener("click", () => {
          state.jugada("piedra");
        });
      }
      if (texto == "tijera") {
        eleccionEl.setAttribute("src", imageTijera);
        this.setAttribute("id", "tijera");
        this.addEventListener("click", () => {
          state.jugada("tijera");
        });
      }
      if (texto == "papel") {
        eleccionEl.setAttribute("src", imagePapel);
        this.setAttribute("id", "papel");
        this.addEventListener("click", () => {
          state.jugada("papel");
        });
      }

      eleccionEl.setAttribute("class", "img");

      var estiloImg = document.createElement("style");
      estiloImg.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
        *{box-sizing: border-box}  
        h1{margin:0}
          .img{
              max-width:100px;
              max-height:100px;

             
             
          }        
          `;

      this.appendChild(estiloImg);
      this.appendChild(eleccionEl);
    }
  }
  customElements.define("eleccion-circular", EleccionClass);
}
