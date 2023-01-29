import { state } from "../state";

export function jugar(contenedor) {
  const div = document.createElement("div");
  const cS = state.retornarEstado();
  const imagePiedra = require("url:../imagenes/piedracircular.svg");
  const imagePapel = require("url:../imagenes/papelcircular.svg");
  const imageTijera = require("url:../imagenes/tijeracircular.svg");

  div.innerHTML = `
  <section class="cuerpo">
  <h2-comp class="font" texto="Presioná jugar
  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos"></h2-comp>
  <boton-comp texto="Jugar"></boton-comp>
  </section >
    <section class="iconos">
      <eleccion-comp src="${imagePiedra}"></eleccion-comp>
      <eleccion-comp src="${imagePapel}"></eleccion-comp>
      <eleccion-comp src="${imageTijera}"></eleccion-comp>
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
  function createTasks(items) {}
  var boton = div.querySelector("boton-comp");
  boton?.addEventListener("click", () => {
    contenedor.irA("/resultado");
  });
  createTasks(cS);

  return div;
}
