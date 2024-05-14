import ColecaoUsuario from "../../app/user/ColecaoUsuario";
import Usuario from "../../app/user/Usuario";

export default class UsuarioEmMemoria implements ColecaoUsuario {
  private static usuarios: Usuario[] = [];
  async inserir(usuario: Usuario): Promise<void> {
    UsuarioEmMemoria.usuarios.push(usuario);
  }
}
