import { state } from "../state";

export function resultado(contenedor) {
  const div = document.createElement("div");
  const cS = state.retornarEstado();
  const imagePiedra = require("url:../imagenes/piedracircular.svg");
  const imagePapel = require("url:../imagenes/papelcircular.svg");
  const imageTijera = require("url:../imagenes/tijeracircular.svg");

  div.innerHTML = `
    <section class="resultadosPosibles">
    <resultado-comp src="empate"></resultado-comp>
    </section> 
    <boton-comp texto="Volver a Jugar"></boton-comp>
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
    background:#dbcbff;
    display: grid;
    justify-items: center;
    align-items: end;

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
    contenedor.irA("/home");
  });
  createTasks(cS);

  return div;
}
