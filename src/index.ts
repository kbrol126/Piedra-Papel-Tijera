import { state } from "./state";
import { iniciarRuter } from "./router";
import { botonCustom } from "./components/boton/botonCustom";
import { tituloComp } from "./components/titulo/titulosCustom";
import { h2Comp } from "./components/h2/h2Custom";
import { eleccionComp } from "./components/piedrapapeltijera";
import { resultadoComp } from "./components/resultado";

import { eleccionCircularComp } from "./components/piedrapapeltijera/iconos-circulares";

state.iniciarEstado();
botonCustom();
tituloComp();
h2Comp();
resultadoComp();
eleccionComp();

eleccionCircularComp();
const root = document.querySelector(".root");
iniciarRuter(root);
