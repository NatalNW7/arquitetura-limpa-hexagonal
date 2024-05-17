import LoginUsuario from "../core/user/LoginUsuario";
import { Express } from "express";

export default class RegistrarUsuarioController {
  constructor(private servidor: Express, private casoDeUso: LoginUsuario) {
    servidor.post("/login", async (req, res) => {
      try {
        const resposta = await casoDeUso.executar({
          email: req.body.email,
          senha: req.body.senha,
        });
        res.status(200).json(resposta);
      } catch (err: any) {
        console.log(err.message);
        res.status(403).send(err.message);
      }
    });
  }
}
