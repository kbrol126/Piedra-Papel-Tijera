import { state } from "../state";

export function jugar(contenedor) {
  const div = document.createElement("div");
  const cS = state.getState();

  div.innerHTML = `
  <section class="cuerpo">
  <h2-comp class="font" texto="Presioná jugar
  y elegí: piedra, papel o tijera antes de que pasen los 5 segundos"></h2-comp>
  <boton-comp texto="Jugar"></boton-comp>
  </section >
    <section class="iconos">
      <eleccion-circular src="piedra"></eleccion-circular>
      <eleccion-circular src="papel"></eleccion-circular>
      <eleccion-circular src="tijera"></eleccion-circular>
    </section>

    `;

  const divEstilo = document.createElement("style");
  div.setAttribute("class", "home");
  divEstilo.innerHTML = `
  .home{
    min-height: 100vh;
    background: #dbcbff;
    display: grid;
    justify-items: center;
    align-items: center;
    padding:3%;
   }
   .cuerpo{
    display: grid;
    min-height: 390px;
    max-width: 500px;
    justify-items: center;
    align-items: center;
  }
  .iconos{
    display:flex;
    min-width: 250px;
    justify-content: space-evenly;
  }
  .font{    font-size: 37px;}`;
  div.appendChild(divEstilo);

  var boton = div.querySelector("boton-comp");
  boton?.addEventListener("click", () => {
    contenedor.irA("/eleccion");
  });

  return div;
}
