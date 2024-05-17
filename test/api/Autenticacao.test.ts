import axios from "axios";
import Usuario from "../../src/core/user/Usuario";

const baseUrl = process.env.API_URL;

test("Deve resgistrar um novo usuario se não existir, caso contrario deve retornar erro", async () => {
  const usuario: Partial<Usuario> = {
    nome: "Lary",
    email: "lary@lary.com",
    senha: "1234",
  };

  try {
    const res = await axios.post(`${baseUrl}/registrar`, usuario);
    console.log("usuario registrado");
    expect(res.status).toBe(201);
  } catch (err: any) {
    console.log(err.response.data);
    expect(err.response.status).toBe(400);
    expect(err.response.data).toBe("Usuario já existe!");
  }
});

test("Deve logar com email e senha corretos", async () => {
  const usuario: Partial<Usuario> = {
    email: "lary@lary.com",
    senha: "1234",
  };

  const res = await axios.post(`${baseUrl}/login`, usuario);
  expect(res.status).toBe(200);
  expect(res.data).toHaveProperty("token");
  console.log(res.data);
});
