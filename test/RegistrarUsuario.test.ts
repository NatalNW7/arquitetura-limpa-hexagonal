import BancoEmMemoria from "../src/exemplo/adapters/db/BancoEmMemoria";
import RegistrarUsuario from "../src/exemplo/app/user/RegistrarUsuario";
import InverterSenha from "../src/exemplo/adapters/auth/InverterSenha";
import SenhaComEspaco from "../src/exemplo/adapters/auth/SenhaComEspaco";
import BecryptAdapter from "../src/exemplo/adapters/auth/BecryptAdapter";

test("Deve registar um usuario com senha invertida", () => {
  const colecao = new BancoEmMemoria();
  const cript = new InverterSenha();
  const casoDeUso = new RegistrarUsuario(colecao, cript);
  const usuario = casoDeUso.executar("Natal", "natal@natal.com", "1234");

  expect(usuario).toHaveProperty("id");
  expect(usuario.nome).toBe("Natal");
  expect(usuario.senha).toBe("4321");
});

test("Deve registar um usuario com senha com espoço", () => {
  const colecao = new BancoEmMemoria();
  const cript = new SenhaComEspaco();
  const casoDeUso = new RegistrarUsuario(colecao, cript);
  const usuario = casoDeUso.executar("Natal", "natal@natal.com", "1234");

  expect(usuario).toHaveProperty("id");
  expect(usuario.nome).toBe("Natal");
  expect(usuario.senha).toBe("1 2 3 4");
});

test("Deve registar um usuario com senha criptografada", () => {
  const colecao = new BancoEmMemoria();
  const cript = new BecryptAdapter();
  const casoDeUso = new RegistrarUsuario(colecao, cript);
  const usuario = casoDeUso.executar("Natal", "natal@natal.com", "1234");

  expect(usuario).toHaveProperty("id");
  expect(usuario.nome).toBe("Natal");
  expect(cript.comparar("1234", usuario.senha)).toBeTruthy();
});
