type Eleccion = "piedra" | "papel" | "tijera";

let state = {
  data: {
    partida: [{ eleccionDelUsuario: "piedra", eleccionPC: "papel" }],
    historial: [{ usuario: 0, maquina: 0, vencedorUltimaMano: "" }],
  },
  listener: [],

  //metodos//
  iniciarEstado() {
    const localData = localStorage.getItem("guarda-estado");
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
    this.setState(ultimoEstado);
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
      ultimoEstado.historial[0].vencedorUltimaMano = "ganador";
    }

    if (texto == "perdio") {
      ultimoEstado.historial[0].maquina = ultimoEstado.historial[0].maquina + 1;
      ultimoEstado.historial[0].vencedorUltimaMano = "perdedor";
    }

    if (texto == "empato") {
      ultimoEstado.historial = ultimoEstado.historial;
      ultimoEstado.historial[0].vencedorUltimaMano = "empate";
    }
    if (texto == "") {
      ultimoEstado.historial = ultimoEstado.historial;
      ultimoEstado.historial[0].vencedorUltimaMano = "";
    }
  },
  getState() {
    return this.data;
  },
  setState(nuevoEstado) {
    this.data = nuevoEstado;
    for (const cb of this.listener) {
      cb();
    }
    localStorage.setItem("guarda-estado", JSON.stringify(this.getState()));
  },
};
export { state };
