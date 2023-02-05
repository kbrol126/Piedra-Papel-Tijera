type Eleccion = "piedra" | "papel" | "tijera";

let state = {
  data: {
    partida: {},
    historial: [{ usuario: 0, maquina: 0, vencedorUltimaMano: "" }],
  },
  listener: [],

  //metodos//
  iniciarEstado() {
    const localData = localStorage.getItem("guarda-estado");
    if (!localData) {
      this.setState(this.data);
    } else {
      this.setState(JSON.parse(localData!));
    }
  },

  jugada(Eleccion: Eleccion | " ") {
    const ultimoEstado = this.getState();
    function nuemeroAleatorio() {
      return Math.floor(Math.random() * 3) + 1;
    }
    let piedra = "piedra";
    let papel = "papel";
    let tijera = "tijera";
    let numero = nuemeroAleatorio();
    if (Eleccion == " ") {
      (ultimoEstado.partida = {
        eleccionDelUsuario: Eleccion,
        eleccionPC: Eleccion,
      }),
        this.ganador(Eleccion, Eleccion);
    }
    if (numero == 1) {
      (ultimoEstado.partida = {
        eleccionDelUsuario: Eleccion,
        eleccionPC: piedra,
      }),
        this.ganador(Eleccion, piedra);
    }
    if (numero == 2) {
      (ultimoEstado.partida = {
        eleccionDelUsuario: Eleccion,
        eleccionPC: papel,
      }),
        this.ganador(Eleccion, papel);
    }
    if (numero == 3) {
      (ultimoEstado.partida = {
        eleccionDelUsuario: Eleccion,
        eleccionPC: tijera,
      }),
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
    } else if (eleccionDelUsuario == eleccionPC) {
      return this.agregarAlHistorial("empato");
    } else {
      this.agregarAlHistorial(" ");
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
    if (texto == " ") {
      ultimoEstado.historial = ultimoEstado.historial;
      ultimoEstado.historial[0].vencedorUltimaMano = " ";
    }
    state.setState(ultimoEstado);
  },
  getState() {
    return this.data;
  },
  setState(nuevoEstado) {
    console.log(this.data);
    this.data = nuevoEstado;
    for (const cb of this.listener) {
      cb();
    }

    localStorage.setItem("guarda-estado", JSON.stringify(this.getState()));
  },
};
export { state };
