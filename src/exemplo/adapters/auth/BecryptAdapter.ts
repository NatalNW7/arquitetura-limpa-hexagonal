import ProvedorCriptografia from "../../app/ports/ProvedorCriptografia";
import bcrypt from "bcrypt";

export default class BecryptAdapter implements ProvedorCriptografia {
  criptografar(senha: string): string {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(senha, salt);
  }

  comparar(senha: string, senhaCriptografada: string): boolean {
    return bcrypt.compareSync(senha, senhaCriptografada);
  }
}
