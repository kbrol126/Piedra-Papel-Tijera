export function resultadoComp() {
  const imagenGanador = require("url:../../imagenes/ganador.svg");
  const imagenPerdedor = require("url:../../imagenes/perdedor.svg");
  const imagenEmpate = require("url:../../imagenes/empate.svg");
  class ResultadoClass extends HTMLElement {
    constructor() {
      super();
      var usuarioHistorial = this.getAttribute("usuarioH");
      console.log(usuarioHistorial);
      var pcHistorial = this.getAttribute("pcH");
      var texto: string | null = this.getAttribute("src");
      function src() {
        if (texto == "ganador") {
          return imagenGanador;
        } else if (texto == "perdedor") {
          return imagenPerdedor;
        } else if (texto == "empate") {
          return imagenEmpate;
        } else {
          return "";
        }
      }
      function textoDelResultado() {
        if (texto == "ganador") {
          return "Has Ganado";
        } else if (texto == "perdedor") {
          return "Has Perdido";
        } else if (texto == "empate") {
          return "Es un Empate";
        } else {
          return "No has elegido nada";
        }
      }
      const divEl = document.createElement("div");
      divEl.setAttribute("class", "resultadoComp");
      divEl.innerHTML = `
      <img src="${src()}" class="img"></img>
      <h1 class="h1">${textoDelResultado()}</h1>
      <div class="contenedorHistorial">
      <div class="historial">
      <h2>Historial</h2>
      <div class="usuario">
      <h3>Vos: </h3><p>${usuarioHistorial}</p>
      </div>
      <div class="maquina">
      <h3>Maquina: </h3><p>${pcHistorial}</p>
      </div>
      </div>
      `;

      var estiloImg = document.createElement("style");
      estiloImg.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
      .resultadoComp {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top:2%;
        }
        .h1{font-family: 'Josefin Sans', sans-serif; margin-bottom:20%; color:red;
    }
        h2 {margin:0 auto;
          width:100px;
          height:22px;
          font-family: 'Josefin Sans', sans-serif;}
          
          h3,p {margin:0 auto;
            width:50px;
            height:22px}
      
      .img{
        max-width:190px;
        max-height:190px;
        
      }
      .usuario, .maquina{
        display:flex;
        gap:39%;
        min-width:150px;
        font-family: 'Josefin Sans', sans-serif;
      }
      .historial{
        width: 95%;
        position:absolute;
        inset:5px;
        background:#dbcbff;
        z-index:1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
       
      }
      .contenedorHistorial{
        position: relative;
        min-width: 255px;
        min-height: 219px;
        background: rgba(0,0, 0, 0.75);
        border-radius: 8px;
        overflow:hidden; 
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .contenedorHistorial::after{
        content: "";
        position: absolute;
        width: 230px;
        height: 245px;
        background-image: conic-gradient(transparent,transparent,transparent,#FFD5FF);
        animation: animate 4s linear infinite;
        animation-delay: -2s;
      }
      
      .contenedorHistorial::before{
        content: "";
        position: absolute;
        width: 230px;
        height: 245px;
        background-image: conic-gradient(transparent,transparent,transparent,#6495ff);
        animation: animate 4s linear infinite;
      }
      @keyframes animate {
        0%{transform: rotate(0deg);}
        100%{transform: rotate(360deg);}
     
      
      `;
      this.appendChild(divEl);
      divEl.appendChild(estiloImg);
    }
  }
  customElements.define("resultado-comp", ResultadoClass);
}
