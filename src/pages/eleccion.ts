import { state } from "../state";

export function eleccion(contenedor) {
  let ultimoEstado: any = state.getState();
  let ultimaPartida = ultimoEstado.partida.splice(-1);
  let usuario = ultimaPartida[0].eleccionDelUsuario;
  let pc = ultimaPartida[0].eleccionPC;

  const div = document.createElement("div");

  div.innerHTML = `
    <section id="contenedor__Temporizador">
    </section>
    <section class="iconos">
    <eleccion-comp src="piedra" ></eleccion-comp>
    <eleccion-comp src="papel"  ></eleccion-comp>
    <eleccion-comp src="tijera" ></eleccion-comp>
    </section>

    `;

  const divEstilo = document.createElement("style");
  div.setAttribute("class", "home");
  divEstilo.innerHTML = `
  .home{
    min-height: 100vh;
    background:#dbcbff;
    display: grid;
    justify-items: center;
    align-items: end;

        }
  .iconos{
    min-width:340px;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-items: center;
    justify-content: space-around;
  }
  eleccion-comp {
    width: 50%;
    transition: all 0.3s;
    transform-origin: bottom;
  }
  eleccion-comp:hover {
    width: 100%;
    transform: scale(1,3);

}`;

  var contadorEl: any = div.querySelector("#contenedor__Temporizador");
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

  function animacion() {
    div.innerHTML = `<div class="pc"><eleccion-comp src="${pc}" ></eleccion-comp></div>
    <div class="usuario"><eleccion-comp src="${usuario}" ></eleccion-comp></div>`;
    div.setAttribute("class", "animacion");
    const estiloAnimacion = document.createElement("style");
    estiloAnimacion.innerText = `.animacion{
      min-height: 100vh;
      background:#dbcbff;
      display: grid;
      justify-items: center;
      align-content: space-between;}
      eleccion-comp {
        display:grid;
        transition: all 0.3s;
        transform-origin: bottom;
        transform: scale(1,3);
      }
      .pc{
        transform: rotate(180deg);
      }
      `;
    div.appendChild(estiloAnimacion);
    setTimeout(function () {
      contenedor.irA("/resultado");
    }, 2000);
  }

  function IniciarCronometro() {
    intervaloDeTemporizador = setInterval(() => {
      tiempoTranscurrido = tiempoTranscurrido += 1;
      tiempoRestante = tiempoLimite - tiempoTranscurrido;
      contadorEl.querySelector(".temporizador")!.innerHTML =
        formatoDeHora(tiempoRestante);
      setCircleDasharray();
      colorDelCaminoRestante(tiempoRestante);

      //////////////////////////////////escuchar eventos click en los iconos///////////////////////////////////
      div.querySelector("#piedra")?.addEventListener("click", () => {
        animacion();
      });
      div.querySelector("#papel")?.addEventListener("click", () => {
        animacion();
      });
      div.querySelector("#tijera")?.addEventListener("click", () => {
        animacion();
      });
      //////////////////////////////////////////////////////////////////////////////////////////////////////////

      if (tiempoRestante === 0) {
        seAcaboElTiempo();
        contenedor.irA("/resultado");
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

  var estiloTempo = document.createElement("style");
  estiloTempo.textContent = `
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
  contadorEl.appendChild(estiloTempo);
  div.appendChild(divEstilo);

  return div;
}
