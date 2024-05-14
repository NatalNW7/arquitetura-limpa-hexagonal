import Id from "../shared/Id";
import ColecaoUsuario from "./ColecaoUsuario";
import ProvedorCriptografia from "./ProvedorCriptografia";
import Usuario from "./Usuario";

export default class RegistrarUsuario {
  constructor(
    private colecao: ColecaoUsuario,
    private cript: ProvedorCriptografia
  ) {}

  async executar(nome: string, email: string, senha: string): Promise<Usuario> {
    const senhaCripto = this.cript.criptografar(senha);

    const usuarioExistente = await this.colecao.buscarPorEmail(email);

    if (usuarioExistente) throw new Error("Usuario já existe!");

    const usuario: Usuario = {
      id: Id.gerar(),
      nome,
      email,
      senha: senhaCripto,
    };

    this.colecao.inserir(usuario);
    return usuario;
  }
}
