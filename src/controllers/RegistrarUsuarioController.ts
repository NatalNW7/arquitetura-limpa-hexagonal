import RegistrarUsuario from "../core/user/RegistrarUsuario";
import { Express } from "express";

export default class RegistrarUsuarioController {
  constructor(
    private servidor: Express,
    private registrarUsuario: RegistrarUsuario
  ) {
    servidor.post("/registrar", async (req, res) => {
      try {
        await registrarUsuario.executar(
          req.body.nome,
          req.body.email,
          req.body.senha
        );
        res.status(201).send();
      } catch (err: any) {
        res.status(400).send(err.message);
      }
    });
  }
}
