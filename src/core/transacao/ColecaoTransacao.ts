import Transacao from "./Transacao";

export default interface ColecaoTransacao {
  adicionar(transacao: Transacao): Promise<void>;
  autalizar(transacao: Transacao): Promise<void>;
  buscarPorId(
    idUsuario: string,
    idTransacao: string
  ): Promise<Transacao | null>;
  buscarPorMes(
    idUsuario: string,
    ano: number,
    mes: number
  ): Promise<Transacao[] | null>;
}
