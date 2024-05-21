import axios from "axios";
import usuarios from "../data/usuarios";

const baseUrl = process.env.API_URL;

export async function getAuthorizationHeader() {
  const resposta = await axios.post(`${baseUrl}/login`, usuarios.completo);
  return {
    headers: {
      Authorization: `Bearer ${resposta.data.token}`,
    },
  };
}
