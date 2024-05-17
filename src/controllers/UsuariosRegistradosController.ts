import UsuariosRegistrados from "../core/user/UsuariosRegistrados";
import { Express } from "express";

export default class UsuariosRegistradosController {
  constructor(
    private servidor: Express,
    private casoDeUso: UsuariosRegistrados
  ) {
    servidor.get("/usuarios", async (req, res) => {
      try {
        const usuarios = await casoDeUso.executar();

        res.status(200).json(usuarios);
      } catch (err: any) {
        res.status(400).send(err.message);
      }
    });
  }
}
