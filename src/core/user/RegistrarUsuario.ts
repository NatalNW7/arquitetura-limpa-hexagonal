import CasoDeUso from "../shared/CasoDeUso";
import Id from "../shared/Id";
import ColecaoUsuario from "./ColecaoUsuario";
import ProvedorCriptografia from "./ProvedorCriptografia";
import Usuario from "./Usuario";

export type Entrada = { nome: string; email: string; senha: string };

export default class RegistrarUsuario implements CasoDeUso<Entrada, Usuario> {
  constructor(
    private colecao: ColecaoUsuario,
    private cript: ProvedorCriptografia
  ) {}

  async executar(dto: Entrada): Promise<Usuario> {
    const senhaCripto = this.cript.criptografar(dto.senha);

    const usuarioExistente = await this.colecao.buscarPorEmail(dto.email);

    if (usuarioExistente) throw new Error("Usuario já existe!");

    const usuario: Usuario = {
      id: Id.gerar(),
      nome: dto.nome,
      email: dto.email,
      senha: senhaCripto,
    };

    this.colecao.inserir(usuario);
    return usuario;
  }
}
