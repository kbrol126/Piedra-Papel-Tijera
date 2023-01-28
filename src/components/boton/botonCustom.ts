export function botonCustom() {
  class Buttonclass extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var texto = this.getAttribute("texto") || "Click Aqui";

      var botonEl = document.createElement("button");
      botonEl.setAttribute("class", "boton");
      botonEl.setAttribute("type", "submit");
      botonEl.textContent = texto;
      var styleBotonB = document.createElement("style");
      styleBotonB.textContent = `
      
      .boton {
        position: relative;
        width:100%;
        padding: 10px 20px;
        border-radius: 7px;
        border: 1px solid rgb(61, 106, 255);
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 2px;
        background: transparent;
        color: #6495ff;
        overflow: hidden;
        box-shadow: 0 0 0 0 transparent;
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
      }
      
      .boton:hover {
        background: rgb(61, 106, 255);
        box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
      }
      
      .boton:hover::before {
        -webkit-animation: sh02 0.5s 0s linear;
        -moz-animation: sh02 0.5s 0s linear;
        animation: sh02 0.5s 0s linear;
      }
      
      .boton::before {
        content: '';
        display: block;
        width: 0px;
        height: 86%;
        position: absolute;
        top: 7%;
        left: 0%;
        opacity: 0;
        background: #fff;
        box-shadow: 0 0 50px 30px #fff;
        -webkit-transform: skewX(-20deg);
        -moz-transform: skewX(-20deg);
        -ms-transform: skewX(-20deg);
        -o-transform: skewX(-20deg);
        transform: skewX(-20deg);
      }
      
      @keyframes sh02 {
        from {
          opacity: 0;
          left: 0%;
        }
      
        50% {
          opacity: 1;
        }
      
        to {
          opacity: 0;
          left: 100%;
        }
      }
      
      .boton:active {
        box-shadow: 0 0 0 0 transparent;
        -webkit-transition: box-shadow 0.2s ease-in;
        -moz-transition: box-shadow 0.2s ease-in;
        transition: box-shadow 0.2s ease-in;
      }
      `;

      this.appendChild(styleBotonB);
      this.appendChild(botonEl);
    }
  }
  customElements.define("boton-comp", Buttonclass);
}
