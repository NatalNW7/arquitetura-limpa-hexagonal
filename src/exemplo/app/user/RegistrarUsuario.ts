import ColecaoUsuario from "./ColecaoUsuario";
import ProvedorCriptografia from "./ProvedorCriptografia";
import Usuario from "./Usuario";

export default class RegistrarUsuario {
  constructor(
    private colecao: ColecaoUsuario,
    private cript: ProvedorCriptografia
  ) {}

  executar(nome: string, email: string, senha: string): Usuario {
    const senhaCripto = this.cript.criptografar(senha);

    const usuario: Usuario = {
      id: Math.random(),
      nome,
      email,
      senha: senhaCripto,
    };

    this.colecao.inserir(usuario);
    return usuario;
  }
}
