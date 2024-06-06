import Transacao from "../../src/core/transacao/Transacao";

const transacaoRef = {
  descricao: "Conta de Luz",
  vencimento: new Date("2021-01-01"),
  valor: -100,
  idUsuario: "16766ed9-5977-4736-b9d8-bb1aebc927b1",
} as Transacao;

export default {
  semId: transacaoRef,
  lista: [
    { ...transacaoRef, valor: 5000, descricao: "Salario" },
    { ...transacaoRef, valor: -450, descricao: "Conta de Luz" },
    { ...transacaoRef, valor: -100, descricao: "Conta de Agua" },
    { ...transacaoRef, valor: -250, descricao: "Conta de Telefone" },
  ],
};
