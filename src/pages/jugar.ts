import { state } from "../state";

export function jugar(container) {
  const div = document.createElement("div");
  const cS = state.retornarEstado();

  div.innerHTML = `
  <h2-comp texto="Presioná jugar
  y elegí: piedra, papel o tijera antes de que pasen los 3 segundos"></h2-comp>
    <boton-comp texto="Jugar"></boton-comp>

    `;

  const divEstilo = document.createElement("style");
  div.setAttribute("class", "home");
  divEstilo.innerHTML = `
  .home{
    min-height: 100vh;
    background:#dbcbff;
    padding:15% 11%;

        }`;
  div.appendChild(divEstilo);
  function createTasks(items) {}
  //   var boton = div.querySelector("boton-comp");
  //   boton?.addEventListener("click", () => {
  //     container.goTo("/jugar");
  //   });
  createTasks(cS);

  return div;
}
