export default interface Cript {
  criptografar(senha: string): string;
  comparar(senha: string, senhaCriptografada: string): boolean;
}
