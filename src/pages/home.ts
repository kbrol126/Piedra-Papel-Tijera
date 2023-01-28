import { state } from "../state";

export function home(contenedor) {
  const div = document.createElement("div");
  const cS = state.retornarEstado();
  const imagePiedra = require("url:../piedra.svg");
  const imagePapel = require("url:../papel.svg");
  const imageTijera = require("url:../tijera.svg");

  div.innerHTML = `
    <section class="cuerpo">
      <titulo-comp texto="Piedra Papel ó Tijera"></titulo-comp>
      <boton-comp texto="Empezar"></boton-comp>
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
    min-width: 365px;
    justify-items: center;
    align-items: center;
  }
  .iconos{
    display:flex;
    min-width: 250px;
    justify-content: space-evenly;
  }`;
  div.appendChild(divEstilo);
  function createTasks(items) {}
  var boton = div.querySelector("boton-comp");
  boton?.addEventListener("click", () => {
    contenedor.irA("/jugar");
  });
  createTasks(cS);

  return div;
}
