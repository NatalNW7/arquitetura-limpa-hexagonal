import express from "express";
import ColecaoUsuarioDB from "./adapters/db/knex/ColecaoUsuarioDB";
import BecryptAdapter from "./adapters/auth/BecryptAdapter";
import RegistrarUsuario from "./core/user/RegistrarUsuario";
import RegistrarUsuarioController from "./controllers/RegistrarUsuarioController";
import LoginUsuarioController from "./controllers/LoginUsuarioController";
import LoginUsuario from "./core/user/LoginUsuario";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log("🔥Server is running on port 3001");
});

const colecao = new ColecaoUsuarioDB();
const provedorCripto = new BecryptAdapter();

const registrarUsuario = new RegistrarUsuario(colecao, provedorCripto);
new RegistrarUsuarioController(app, registrarUsuario);

const loginUsuario = new LoginUsuario(colecao, provedorCripto);
new LoginUsuarioController(app, loginUsuario);
