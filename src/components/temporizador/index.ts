import { state } from "../../state";

export function contadorComp() {
  class contadorClase extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      var contadorEl = document.createElement("div");
      contadorEl.setAttribute("class", "contador");
      contadorEl.innerHTML = `<div class="app"></div>`;

      const FULL_DASH_ARRAY = 283;
      const UMBRAL_DE_ADVERTENCIA = 3;
      const UMBRAL_DE_ALERTA = 2;

      const codigosDeColor = {
        info: {
          color: "verde",
        },
        peligro: {
          color: "naranja",
          umbral: UMBRAL_DE_ADVERTENCIA,
        },
        alerta: {
          color: "rojo",
          umbral: UMBRAL_DE_ALERTA,
        },
      };

      const tiempoLimite = 5;
      let tiempoTranscurrido = 0;
      let tiempoRestante = tiempoLimite;
      let intervaloDeTemporizador: any = null;
      let colorObtenido = codigosDeColor.info.color;

      contadorEl.querySelector(".app")!.innerHTML = `
        <div class="temporizadorBase">
        <svg class="svgTemporizador" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g class="circuloDelTemporizador">
            <circle class="caminoTranscurrido" cx="50" cy="50" r="45"></circle>
            <path
              id="circulo"
              stroke-dasharray="283"
              class="caminoRestante ${colorObtenido}"
              d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
              "
            ></path>
          </g>
        </svg>
        <span class="temporizador etiquetaDelTemporizador" id="tiempo">${formatoDeHora(
          tiempoRestante
        )}</span>
      </div>
      `;

      IniciarCronometro();

      function seAcaboElTiempo() {
        clearInterval(intervaloDeTemporizador);
      }

      function IniciarCronometro() {
        intervaloDeTemporizador = setInterval(() => {
          tiempoTranscurrido = tiempoTranscurrido += 1;
          tiempoRestante = tiempoLimite - tiempoTranscurrido;
          contadorEl.querySelector(".temporizador")!.innerHTML =
            formatoDeHora(tiempoRestante);
          setCircleDasharray();
          colorDelCaminoRestante(tiempoRestante);

          if (tiempoRestante === 0) {
            seAcaboElTiempo();
            contadorEl.innerHTML = `SE ACABO EL TIEMPO`;
          }
        }, 1000);
      }

      function formatoDeHora(tiempo) {
        const minutos = Math.floor(tiempo / 60);
        let segundos = tiempo % 60;

        if (segundos < 3) {
          segundos = Number(`0${segundos}`);
        }

        return `${minutos}:${segundos}`;
      }

      function colorDelCaminoRestante(tiempoRestante) {
        const { alerta, peligro, info } = codigosDeColor;
        if (tiempoRestante <= alerta.umbral) {
          document.getElementById("circulo")!.classList.remove(peligro.color);
          document.getElementById("circulo")!.classList.add(alerta.color);
        } else if (tiempoRestante <= peligro.umbral) {
          document.getElementById("circulo")!.classList.remove(info.color);
          document.getElementById("circulo")!.classList.add(peligro.color);
        }
      }

      function calculateTimeFraction() {
        const rawTimeFraction = tiempoRestante / tiempoLimite;
        return rawTimeFraction - (1 / tiempoLimite) * (1 - rawTimeFraction);
      }
      function setCircleDasharray() {
        const circleDasharray = `${(
          calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
          .getElementById("circulo")!
          .setAttribute("stroke-dasharray", circleDasharray);
      }
      /////////////////////////////////////////////////////////////////////////////////////////////
      //   ////////////////////////////////////////////////////////////////////////////////////////////////////
      //   contadorEl.textContent = texto;
      var estiloh2 = document.createElement("style");
      estiloh2.textContent = `
      .contador {
        font-family: sans-serif;
        display: grid;
        place-items: center;
      }
      
      .temporizadorBase {
        position: relative;
        width: 250px;
        height: 250px;
      }
      
      .svgTemporizador {
        transform: scaleX(-1);
      }
      
      .circuloDelTemporizador {
        fill: none;
        stroke: none;
      }
      
      .caminoTranscurrido {
        stroke-width: 7px;
        stroke: grey;
      }
      
      .caminoRestante {
        stroke-width: 7px;
        stroke-linecap: round;
        transform: rotate(90deg);
        transform-origin: center;
        transition: 1s linear all;
        fill-rule: nonzero;
        stroke: currentColor;
      }
      
      .caminoRestante.verde {
        color: rgb(65, 184, 131);
      }
      
      .caminoRestante.naranja {
        color: orange;
      }
      
      .caminoRestante.rojo {
        color: red;
      }
      
      .etiquetaDelTemporizador {
        position: absolute;
        width: 250px;
        height: 250px;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 48px;
      }
            `;

      this.appendChild(estiloh2);
      this.appendChild(contadorEl);
      // }}
    }
  }
  customElements.define("contador-comp", contadorClase);
}
