import ProvedorCriptografia from "../../app/user/ProvedorCriptografia";
export default class SenhaComEspoco implements ProvedorCriptografia {
  criptografar(senha: string): string {
    return senha.split("").join(" ");
  }

  comparar(senha: string, senhaCriptografada: string): boolean {
    const senhaFornecida = this.criptografar(senha);

    return senhaFornecida === senhaCriptografada;
  }
}
