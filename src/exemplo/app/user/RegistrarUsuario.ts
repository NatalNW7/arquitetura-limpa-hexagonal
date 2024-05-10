import Colecao from "../ports/Colecao";
import ProvedorCriptografia from "../ports/ProvedorCriptografia";

export default class RegistrarUsuario {
  constructor(private colecao: Colecao, private cript: ProvedorCriptografia) {}

  executar(nome: string, email: string, senha: string) {
    const senhaCripto = this.cript.criptografar(senha);

    const usuario = {
      id: Math.random(),
      nome,
      email,
      senha: senhaCripto,
    };

    this.colecao.inserir(usuario);
    return usuario;
  }
}
