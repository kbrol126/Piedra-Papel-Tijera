import { home } from "./pages/inicio";
import { jugar } from "./pages/jugar";
import { resultado } from "./pages/resultado";
import { eleccion } from "./pages/eleccion";
import { animacion } from "./pages/animacion";
const BASE_PATH = "/Piedra-Papel-Tijera";

function isGithubPages() {
  return location.host.includes("github.io");
}
// creo un array de rutas posibles, con rutas y un compenente con una funcion que abre una pagina
const routes = [
  {
    ruta: /\/inicio/,
    componente: home,
  },
  {
    ruta: /\/jugar/,
    componente: jugar,
  },
  {
    ruta: /\/eleccion/,
    componente: eleccion,
  },
  {
    ruta: /\/animacion/,
    componente: animacion,
  },
  {
    ruta: /\/resultado/,
    componente: resultado,
  },
];
export function iniciarRuter(contenedor: Element | null) {
  window.onpopstate = function () {
    redirigir(location.pathname);
  };

  if (location.pathname == "/") {
    irA("/inicio");
  } else {
    redirigir(location.pathname);
  }

  redirigir(location.pathname);

  function irA(path) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    redirigir(completePath);
  }
  function redirigir(route) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.ruta.test(newRoute)) {
        const el: any = r.componente({ irA: irA });
        if (contenedor?.firstChild) {
          contenedor.firstChild.remove();
        }
        contenedor?.appendChild(el);
      }
    }
  }
}
