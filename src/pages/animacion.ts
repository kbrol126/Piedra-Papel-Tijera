import { state } from "../state";
export function animacion(contenedor) {
  let ultimoEstado: any = state.getState();
  let ultimaPartida = ultimoEstado.partida;
  let usuario = ultimaPartida.eleccionDelUsuario;
  let pc = ultimaPartida.eleccionPC;
  const div = document.createElement("div");
  div.innerHTML = `<div class="pc"><eleccion-comp src="${pc}" ></eleccion-comp></div>
    <div class="usuario"><eleccion-comp src="${usuario}" ></eleccion-comp></div>`;
  div.setAttribute("class", "animacion");
  const estiloAnimacion = document.createElement("style");
  estiloAnimacion.innerText = `

  .animacion{
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
        pointer-events: none;
        
      }
      .pc{
        transform: rotate(180deg);
      }
      `;
  div.appendChild(estiloAnimacion);
  setTimeout(function () {
    contenedor.irA("/resultado");
  }, 2000);
  return div;
}
