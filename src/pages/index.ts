import { state } from "../state";

export function home(container) {
  const div = document.createElement("div");
  const cS = state.retornarEstado();

  div.innerHTML = `
  <titulo-comp texto="Piedra Papel ó Tijera"></titulo-comp>
    <boton-comp texto="Empezar"></boton-comp>

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
  createTasks(cS);

  return div;
}
