type Eleccion = "piedra" | "papel" | "tijera";

let state = {
  data: {
    partida: [],
    historial: [{ usuario: 0, maquina: 0 }],
  },

  //metodos//
  iniciarEstado() {
    const localData = localStorage.getItem("guarda-estado");
    this.setState(JSON.parse(localData!));
  },

  jugada(Eleccion: Eleccion) {
    const ultimoEstado = this.getState();
    function nuemeroAleatorio() {
      return Math.floor(Math.random() * 3) + 1;
    }
    let piedra = "piedra";
    let papel = "papel";
    let tijera = "tijera";
    let numero = nuemeroAleatorio();
    if (numero == 1) {
      ultimoEstado.partida.push({
        eleccionDelUsuario: Eleccion,
        eleccionPC: piedra,
      });
      this.ganador(Eleccion, piedra);
    }
    if (numero == 2) {
      ultimoEstado.partida.push({
        eleccionDelUsuario: Eleccion,
        eleccionPC: papel,
      });
      this.ganador(Eleccion, papel);
    }
    if (numero == 3) {
      ultimoEstado.partida.push({
        eleccionDelUsuario: Eleccion,
        eleccionPC: tijera,
      });
      this.ganador(Eleccion, tijera);
    }

    console.log(this.getState());
  },
  ganador(eleccionDelUsuario: Eleccion, eleccionPC: Eleccion) {
    if (
      (eleccionDelUsuario == "tijera" && eleccionPC == "papel") ||
      (eleccionDelUsuario == "piedra" && eleccionPC == "tijera") ||
      (eleccionDelUsuario == "papel" && eleccionPC == "piedra")
    ) {
      return this.agregarAlHistorial("gano");
    } else if (
      (eleccionDelUsuario == "papel" && eleccionPC == "tijera") ||
      (eleccionDelUsuario == "tijera" && eleccionPC == "piedra") ||
      (eleccionDelUsuario == "piedra" && eleccionPC == "papel")
    ) {
      return this.agregarAlHistorial("perdio");
    } else {
      return this.agregarAlHistorial("empato");
    }
  },
  agregarAlHistorial(texto: string) {
    const ultimoEstado = this.getState();

    if (texto == "gano") {
      ultimoEstado.historial[0].usuario = ultimoEstado.historial[0].usuario + 1;
    }

    if (texto == "perdio") {
      ultimoEstado.historial[0].maquina = ultimoEstado.historial[0].maquina + 1;
    }

    if (texto == "empato") {
      ultimoEstado.historial = ultimoEstado.historial;
    }
  },
  getState(): object {
    return this.data;
  },
  setState(nuevoEstado) {
    localStorage.setItem("guarda-estado", JSON.stringify(this.getState()));
  },
};
export { state };
