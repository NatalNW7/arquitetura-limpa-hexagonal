import ColecaoUsuario from "./ColecaoUsuario";
import ProvedorCriptografia from "./ProvedorCriptografia";
import Usuario from "./Usuario";

export default class LoginUsuario {
  constructor(
    private colecao: ColecaoUsuario,
    private cript: ProvedorCriptografia
  ) {}

  async executar(email: string, senha: string): Promise<Usuario> {
    const usuarioExistente = await this.colecao.buscarPorEmail(email);

    if (!usuarioExistente) throw new Error("Usuario não existe!");

    const mesmaSenha = this.cript.comparar(senha, usuarioExistente.senha!);
    if (!mesmaSenha) throw new Error("Senha incorreta!");

    return { ...usuarioExistente, senha: undefined };
  }
}
