import { state } from "./state";
import { iniciarRuter } from "./router";
import { botonCustom } from "./components/boton/botonCustom";
import { tituloComp } from "./components/titulo/titulosCustom";

state.iniciarEstado();
botonCustom();
tituloComp();
const root = document.querySelector(".root");
iniciarRuter(root);
