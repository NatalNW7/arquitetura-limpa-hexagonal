import axios from "axios";
import { getAuthorizationHeader } from "../utils/auth";
import transacoes from "../data/transacoes";

const baseUrl = process.env.API_URL;

test("Deve salvar uma nova transacao", async () => {
  const headers = await getAuthorizationHeader();
  const res = await axios.post(
    `${baseUrl}/transacao`,
    transacoes.semId,
    headers
  );
  expect(res.status).toBe(200);
});

test("Deve alterar uma transacao", async () => {
  const headers = await getAuthorizationHeader();
  const res = await axios.post(
    `${baseUrl}/transacao/b45a6aef-6434-4794-83a4-29c84c6b76a2`,
    { ...transacoes.semId, valor: -200 },
    headers
  );
  expect(res.status).toBe(200);
});

test("Deve salvar uma lista de transacoes", async () => {
  const headers = await getAuthorizationHeader();
  const respostas = transacoes.lista.map(async (transacao) => {
    const res = await axios.post(`${baseUrl}/transacao`, transacao, headers);
    return res.status;
  });

  const listaDeStatus = await Promise.all(respostas);
  expect(listaDeStatus.every((status) => status === 200)).toBe(true);
});

test("Deve retornar o extrato mensal + saldo consolidado", async () => {
  try {
    const headers = await getAuthorizationHeader();
    const res = await axios.get(`${baseUrl}/extrato/2021/01`, headers);
    console.log(res.data);
    expect(res.status).toBe(200);
    expect(res.data).toHaveProperty("transacoes");
    expect(res.data).toHaveProperty("saldo");
  } catch (err: any) {
    console.log(err.response.data);
  }
});
