import { Request, Response, Express } from "express";
import ExtratoMensal from "../core/transacao/ExtratoMensal";

export default class ExtratoMensalController {
  constructor(
    private servidor: Express,
    private casoDeUso: ExtratoMensal,
    ...middlewares: any[]
  ) {
    const func = async (req: Request, res: Response) => {
      try {
        const extrato = await casoDeUso.executar({
          usuario: (req as any).usuario,
          ano: +req.params.ano,
          mes: +req.params.mes,
        });

        res.status(200).json(extrato);
      } catch (err: any) {
        res.status(400).send(err.message);
      }
    };

    servidor.get("/extrato/:ano/:mes", middlewares, func);
  }
}
