import { state } from "../state";

export function resultado(contenedor) {
  let ultimoEstado: any = state.getState();
  let ultimaPartida = ultimoEstado.historial;
  let resultado = ultimaPartida[0].vencedorUltimaMano;
  let usuarioHistorial = ultimaPartida[0].usuario;
  let pcHistorial = ultimaPartida[0].maquina;

  const div = document.createElement("div");
  div.innerHTML = `
    <section class="resultadosPosibles">
    <resultado-comp pcH="${pcHistorial}" usuarioH="${usuarioHistorial}" src="${resultado}"></resultado-comp>
    </section> 
    <boton-comp id="volverAJugar" texto="Volver a Jugar"></boton-comp>
    <boton-comp id="reiniciarHistorial" texto="Reiniciar Historial"></boton-comp>
    <section class="iconos">
    <eleccion-circular src="piedra"></eleccion-comp>
    <eleccion-circular src="papel"></eleccion-comp>
    <eleccion-circular src="tijera"></eleccion-comp>
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
    align-items: center;

        }
        .iconos{
          display:flex;
          min-width: 250px;
          justify-content: space-evenly;
        }`;
  div.appendChild(divEstilo);

  var boton = div.querySelector("#volverAJugar");
  boton?.addEventListener("click", () => {
    contenedor.irA("/Piedra-Papel-Tijera/");
  });
  var boton = div.querySelector("#reiniciarHistorial");
  boton?.addEventListener("click", () => {
    localStorage.clear();
    contenedor.irA("/Piedra-Papel-Tijera/");
  });

  return div;
}
