import { home } from "./pages";

// creo un array de rutas posibles, con rutas y un compenente con una funcion que abre una pagina
const routes = [
  {
    ruta: /\/home/,
    componente: home,
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
