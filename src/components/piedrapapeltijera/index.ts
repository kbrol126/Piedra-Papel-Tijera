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
        *{box-sizing: border-box}  
        h1{margin:0}
          .img{
              max-width:80px;
              max-height:80px;

             
             
          }        
          `;

      shadow.appendChild(estiloImg);
      shadow.appendChild(eleccionEl);
    }
  }
  customElements.define("eleccion-comp", h2Clase);
}
