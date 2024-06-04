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
