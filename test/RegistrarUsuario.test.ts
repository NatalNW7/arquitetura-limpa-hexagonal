import UsuarioEmMemoria from "../src/exemplo/adapters/db/UsuarioEmMemoria";
import RegistrarUsuario from "../src/exemplo/app/user/RegistrarUsuario";
import InverterSenha from "../src/exemplo/adapters/auth/InverterSenha";
import SenhaComEspaco from "../src/exemplo/adapters/auth/SenhaComEspaco";
import BecryptAdapter from "../src/exemplo/adapters/auth/BecryptAdapter";
import ColecaousuarioDB from "../src/exemplo/adapters/db/knex/ColecaoUsuarioDB";

test("Deve registar um usuario com senha invertida", () => {
  const colecao = new UsuarioEmMemoria();
  const cript = new InverterSenha();
  const casoDeUso = new RegistrarUsuario(colecao, cript);
  const usuario = casoDeUso.executar("Natal", "natal@natal.com", "1234");

  expect(usuario).toHaveProperty("id");
  expect(usuario.nome).toBe("Natal");
  expect(usuario.senha).toBe("4321");
});

test("Deve registar um usuario com senha com espoço", () => {
  const colecao = new UsuarioEmMemoria();
  const cript = new SenhaComEspaco();
  const casoDeUso = new RegistrarUsuario(colecao, cript);
  const usuario = casoDeUso.executar("Natal", "natal@natal.com", "1234");

  expect(usuario).toHaveProperty("id");
  expect(usuario.nome).toBe("Natal");
  expect(usuario.senha).toBe("1 2 3 4");
});

test("Deve registar um usuario com senha criptografada", () => {
  const colecao = new UsuarioEmMemoria();
  const cript = new BecryptAdapter();
  const casoDeUso = new RegistrarUsuario(colecao, cript);
  const usuario = casoDeUso.executar("Natal", "natal@natal.com", "1234");

  expect(usuario).toHaveProperty("id");
  expect(usuario.nome).toBe("Natal");
  expect(cript.comparar("1234", usuario.senha!)).toBeTruthy();
});

test("Deve registar um usuario no banco real", async () => {
  const colecao = new ColecaousuarioDB();
  const cript = new BecryptAdapter();
  const casoDeUso = new RegistrarUsuario(colecao, cript);
  const usuario = await casoDeUso.executar("Natal", "natal@natal.com", "1234");

  expect(usuario).toHaveProperty("id");
  expect(usuario.nome).toBe("Natal");
  expect(cript.comparar("1234", usuario.senha!)).toBeTruthy();
});
