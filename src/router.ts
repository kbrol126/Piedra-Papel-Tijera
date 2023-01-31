import { home } from "./pages/home";
import { jugar } from "./pages/jugar";
import { resultado } from "./pages/resultado";
import { jugada } from "./pages/juego";

// creo un array de rutas posibles, con rutas y un compenente con una funcion que abre una pagina
const routes = [
  {
    ruta: /\/home/,
    componente: home,
  },
  {
    ruta: /\/jugar/,
    componente: jugar,
  },
  {
    ruta: /\/juego/,
    componente: jugada,
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
    irA("/home");
  } else {
    redirigir(location.pathname);
  }

  redirigir(location.pathname);
  function irA(path) {
    history.pushState({}, "", path);
    redirigir(path);
  }
  function redirigir(route) {
    for (const r of routes) {
      if (r.ruta.test(route)) {
        const el: any = r.componente({ irA: irA });
        if (contenedor?.firstChild) {
          contenedor.firstChild.remove();
        }
        contenedor?.appendChild(el);
      }
    }
  }
}
