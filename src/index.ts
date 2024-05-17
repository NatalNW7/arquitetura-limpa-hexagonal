import express from "express";
import ColecaoUsuarioDB from "./adapters/db/knex/ColecaoUsuarioDB";
import BecryptAdapter from "./adapters/auth/BecryptAdapter";
import RegistrarUsuario from "./core/user/RegistrarUsuario";
import RegistrarUsuarioController from "./controllers/RegistrarUsuarioController";
import LoginUsuarioController from "./controllers/LoginUsuarioController";
import LoginUsuario from "./core/user/LoginUsuario";
import JwtAdapter from "./adapters/auth/JwtAdapter";
import UsuariosRegistrados from "./core/user/UsuariosRegistrados";
import UsuariosRegistradosController from "./controllers/UsuariosRegistradosController";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log("🔥Server is running on port 3001");
});

const colecao = new ColecaoUsuarioDB();
const provedorCripto = new BecryptAdapter();
const provedorToken = new JwtAdapter(process.env.JWT_SECRECT!);

const registrarUsuario = new RegistrarUsuario(colecao, provedorCripto);
new RegistrarUsuarioController(app, registrarUsuario);

const loginUsuario = new LoginUsuario(colecao, provedorCripto, provedorToken);
new LoginUsuarioController(app, loginUsuario);

const usuariosRegistrados = new UsuariosRegistrados(colecao);
new UsuariosRegistradosController(app, usuariosRegistrados);
