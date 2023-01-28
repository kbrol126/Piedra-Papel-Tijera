export function tituloComp() {
  class TituloClase extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var texto = this.getAttribute("texto") || "Soy un titulo";

      var tituloEl = document.createElement("h1");
      tituloEl.setAttribute("class", "titulo");

      tituloEl.textContent = texto;
      var estiloTitulo = document.createElement("style");
      estiloTitulo.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
        h1{margin:0}
        .titulo{
            text-align: center;
            font-family: 'Josefin Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 80px;
            line-height: 128%;
            color: rgb(61, 106, 255);
           
        }        
        `;

      this.appendChild(estiloTitulo);
      this.appendChild(tituloEl);
    }
  }
  customElements.define("titulo-comp", TituloClase);
}
