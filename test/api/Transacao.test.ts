import axios from "axios";
import { getAuthorizationHeader } from "../utils/auth";

const baseUrl = process.env.API_URL;

test("Deve salvar uma nova transacao", async () => {
  const headers = await getAuthorizationHeader();
  const res = await axios.post(`${baseUrl}/transacao`, {}, headers);
  expect(res.status).toBe(200);
});
