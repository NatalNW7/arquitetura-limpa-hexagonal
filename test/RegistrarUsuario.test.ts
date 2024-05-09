import RegistrarUsuario from "../src/RegistrarUsuario";

test("Deve registar um usuario", () => {
  const casoDeUso = new RegistrarUsuario();
  const usuario = casoDeUso.executar("Natal", "natal@natal.com", "1234");

  expect(usuario).toHaveProperty("id");
  expect(usuario.nome).toBe("Natal");
});
