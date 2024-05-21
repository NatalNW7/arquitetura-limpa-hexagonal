import CasoDeUso from "../shared/CasoDeUso";
import ColecaoUsuario from "./ColecaoUsuario";
import Usuario from "./Usuario";

export default class implements CasoDeUso<void, Usuario[]> {
  constructor(private colecao: ColecaoUsuario) {}
  async executar(): Promise<Usuario[]> {
    return this.colecao.buscarUsuarios();
  }
}
