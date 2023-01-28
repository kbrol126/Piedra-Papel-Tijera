export function h2Comp() {
  class h2Clase extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var texto = this.getAttribute("texto") || "Soy un titulo";

      var h2El = document.createElement("h2");
      h2El.setAttribute("class", "h2");

      h2El.textContent = texto;
      var estiloh2 = document.createElement("style");
      estiloh2.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
        h2{margin:0}
        .h2{
            text-align: center;
            font-family: 'Josefin Sans', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 80px;
            line-height: 128%;
            color: rgb(61, 106, 255);
           
        }        
        `;

      this.appendChild(estiloh2);
      this.appendChild(h2El);
    }
  }
  customElements.define("h2-comp", h2Clase);
}
