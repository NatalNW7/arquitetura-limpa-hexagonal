import ColecaoUsuario from "../../app/user/ColecaoUsuario";
import Usuario from "../../app/user/Usuario";

export default class UsuarioEmMemoria implements ColecaoUsuario {
  private usuarios: Usuario[] = [];
  async inserir(usuario: Usuario): Promise<void> {
    await this.usuarios.push(usuario);
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const usuario = this.usuarios.find((usuario) => usuario.email === email);

    return usuario ?? null;
  }
}
