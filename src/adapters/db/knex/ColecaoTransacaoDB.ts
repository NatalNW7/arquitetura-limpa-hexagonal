import ColecaoTransacao from "../../../core/transacao/ColecaoTransacao";
import Transacao from "../../../core/transacao/Transacao";
import conexao from "./conexao";

export default class ColecaoTransacaoDB implements ColecaoTransacao {
  adicionar(transacao: Transacao): Promise<void> {
    return conexao.table("transacoes").insert(this.praTabela(transacao));
  }

  autalizar(transacao: Transacao): Promise<void> {
    return conexao
      .table("transacoes")
      .where("id", transacao.id)
      .update(this.praTabela(transacao));
  }

  async buscarPorId(
    idUsuario: string,
    idTransacao: string
  ): Promise<Transacao | null> {
    const transacoes = await conexao
      .table("transacoes")
      .where({ id: idTransacao, usuario_id: idUsuario });

    if (transacoes.length === 0) return null;

    return this.daTable(transacoes[0]);
  }

  async buscarPorMes(
    idUsuario: string,
    ano: number,
    mes: number
  ): Promise<Transacao[] | null> {
    const transacoes = await conexao
      .table("transacoes")
      .where("usuario_id", idUsuario)
      .andWhere(conexao.raw("strftime('%Y', vencimento) = ?", [ano.toString()]))
      .andWhere(
        conexao.raw("strftime('%m', vencimento) = ?", [
          mes.toString().padStart(2, "0"),
        ])
      );

    return transacoes.map(this.daTable);
  }

  private praTabela(transacao: Transacao): any {
    return {
      id: transacao.id,
      descricao: transacao.descricao,
      valor: transacao.valor,
      vencimento: transacao.vencimento.toISOString(),
      usuario_id: transacao.idUsuario,
    };
  }

  private daTable(transacao: any): Transacao {
    return {
      ...transacao,
      idUsuario: transacao.usuario_id,
    };
  }
}
