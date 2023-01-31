import { state } from "../state";

export function jugada(contenedor) {
  const div = document.createElement("div");
  const cS = state.retornarEstado();
  const imagePiedra = require("url:../imagenes/manoPiedra.svg");
  const imagePapel = require("url:../imagenes/manoPapel.svg");
  const imageTijera = require("url:../imagenes/manoTijera.svg");
  let cuentaRegresiva = "";

  div.innerHTML = `

    <contador-comp></contador-comp>
 
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
  div.appendChild(divEstilo);
  function createTasks(items) {}
  //   var boton = div.querySelector("boton-comp");
  //   boton?.addEventListener("click", () => {
  //     contenedor.goTo("/jugar");
  //   });
  createTasks(cS);

  return div;
}
