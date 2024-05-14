import ColecaoUsuario from "../../../app/user/ColecaoUsuario";
import Usuario from "../../../app/user/Usuario";
import conexao from "./conexao";

export default class ColecaoUsuarioDB implements ColecaoUsuario {
  async inserir(usuario: Usuario): Promise<void> {
    await conexao.table("usuarios").insert(usuario);
  }
}
