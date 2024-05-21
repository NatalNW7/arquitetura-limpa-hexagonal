import UsuariosRegistrados from "../core/user/UsuariosRegistrados";
import { Express, Request, Response } from "express";

export default class UsuariosRegistradosController {
  constructor(
    private servidor: Express,
    private casoDeUso: UsuariosRegistrados,
    ...middlewares: any[]
  ) {
    servidor.get(
      "/usuarios",
      middlewares,
      async (req: Request, res: Response) => {
        try {
          const usuarios = await casoDeUso.executar();

          res.status(200).json(usuarios);
        } catch (err: any) {
          res.status(400).send(err.message);
        }
      }
    );
  }
}
