export function eleccionComp() {
  class h2Clase extends HTMLElement {
    shadow: ShadowRoot | null;
    constructor() {
      super();
      this.render();
    }

    render() {
      var texto: any = this.getAttribute("src");
      var shadow = this.attachShadow({ mode: "open" });

      var eleccionEl = document.createElement("img");
      eleccionEl.setAttribute("src", texto);

      eleccionEl.setAttribute("class", "img");

      var estiloImg = document.createElement("style");
      estiloImg.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
          h1{margin:0}
          .img{
              width:60px;
              height:60px;
             
             
          }        
          `;

      shadow.appendChild(estiloImg);
      shadow.appendChild(eleccionEl);
    }
  }
  customElements.define("eleccion-comp", h2Clase);
}
