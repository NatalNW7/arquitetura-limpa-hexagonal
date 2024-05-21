import { Request, Response, Express } from "express";
import SalvarTransacao from "../core/transacao/SalvarTransacao";

export default class SlavartransacaoController {
  constructor(
    private servidor: Express,
    private casoDeUso: SalvarTransacao,
    ...middlewares: any[]
  ) {
    servidor.post(
      "/transacao",
      middlewares,
      async (req: Request, res: Response) => {
        try {
          const resposta = await casoDeUso.executar();
          res.status(200).json(resposta);
        } catch (err: any) {
          res.status(400).send(err.message);
        }
      }
    );
  }
}
