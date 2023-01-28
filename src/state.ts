type Eleccion = "piedra" | "papel" | "tijera";
type Partida = { eleccionDelUsuario: Eleccion; eleccionPC: Eleccion };

const state = {
  data: {
    partida: {
      eleccionDelUsuario: "",
      eleccionPC: "",
    },
  },
  historial: [{}],

  //metodos//
  iniciarEstado() {
    const localData = localStorage.getItem("save-state");
    this.sobreEscribirEstado(JSON.parse(localData!));
  },

  jugada(Eleccion: Eleccion) {
    const ultimoEstado = this.retornarEstado();
    ultimoEstado.partida.eleccionDelUsuario = Eleccion;
  },
  ganador(eleccionDelUsuario: Eleccion, eleccionPC: Eleccion) {
    if (
      (eleccionDelUsuario == "tijera" && eleccionPC == "papel") ||
      (eleccionDelUsuario == "piedra" && eleccionPC == "tijera") ||
      (eleccionDelUsuario == "papel" && eleccionPC == "piedra")
    ) {
      return 0;
    } else if (
      (eleccionDelUsuario == "papel" && eleccionPC == "tijera") ||
      (eleccionDelUsuario == "tijera" && eleccionPC == "piedra") ||
      (eleccionDelUsuario == "piedra" && eleccionPC == "papel")
    ) {
      return 1;
    } else {
      return 2;
    }
  },
  agregarAlHistorial(partida: Partida) {
    const ultimoEstado = this.retornarEstado();
    ultimoEstado.historial(partida);
  },
  retornarEstado() {
    return this.data;
  },
  sobreEscribirEstado(nuevoEstado) {},
};
export { state };
