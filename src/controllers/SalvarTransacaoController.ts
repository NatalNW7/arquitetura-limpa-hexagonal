import { Request, Response, Express } from "express";
import SalvarTransacao from "../core/transacao/SalvarTransacao";

export default class SlavartransacaoController {
  constructor(
    private servidor: Express,
    private casoDeUso: SalvarTransacao,
    ...middlewares: any[]
  ) {
    const func = async (req: Request, res: Response) => {
      try {
        const transacao = {
          descricao: req.body.descricao,
          valor: +req.body.valor,
          vencimento: new Date(req.body.vencimento),
          idUsuario: req.body.idUsuario,
        };
        await casoDeUso.executar({
          transacao,
          id: req.params.id,
          usuario: (req as any).usuario,
        });
        res.status(200).send();
      } catch (err: any) {
        res.status(400).send(err.message);
      }
    };

    servidor.post("/transacao", middlewares, func);
    servidor.post("/transacao/:id", middlewares, func);
  }
}
