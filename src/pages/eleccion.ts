import { state } from "../state";

export function eleccion(contenedor) {
  const div = document.createElement("div");

  div.innerHTML = `
    <section class="sectionTemporizador">
    <contador-comp></contador-comp>
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
  var count = 1;
  const botonEL = document.createElement("div");
  botonEL.innerHTML = `<boton-comp texto="Volver Al Inicio">`;
  botonEL.addEventListener("click", () => {
    contenedor.irA("/inicio");
  });

  var intervalId = setInterval(function () {
    if (count === 6) {
      clearInterval(intervalId);
      document.querySelector("contador-comp")?.remove();
      document.querySelector(".sectionTemporizador")?.appendChild(botonEL);
    }
    count++;
  }, 1000);

  //////////////////////////////////escuchar eventos click en los iconos///////////////////////////////////
  div.querySelector("#piedra")?.addEventListener("click", () => {
    console.log("piedra");
  });
  div.querySelector("#papel")?.addEventListener("click", () => {
    console.log("papel");
  });
  div.querySelector("#tijera")?.addEventListener("click", () => {
    console.log("tijera");
  });
  //////////////////////////////////////////////////////////////////////////////////////////////////////////
  div.appendChild(divEstilo);

  return div;
}
