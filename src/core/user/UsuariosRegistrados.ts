import CasoDeUso from "../shared/CasoDeUso";
import ColecaoUsuario from "./ColecaoUsuario";
import Usuario from "./Usuario";

export default class implements CasoDeUso<void, Usuario[]> {
  constructor(private colecao: ColecaoUsuario) {}
  async executar(dto: void): Promise<Usuario[]> {
    return this.colecao.buscarUsuarios();
  }
}
