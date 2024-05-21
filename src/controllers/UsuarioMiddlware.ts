import { NextFunction, Request, Response } from "express";
import ColecaoUsuario from "../core/user/ColecaoUsuario";
import ProvedorToken from "../core/user/ProvedorToken";
import Usuario from "../core/user/Usuario";

export default function UsuarioMiddlware(
  colecao: ColecaoUsuario,
  provedorToken: ProvedorToken
) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.replace("Bearer ", "");
      const usuarioToken = provedorToken.validar(token) as Usuario;
      const usuario = await colecao.buscarPorEmail(usuarioToken.email);

      req.usuario = usuario;
      next();
    } catch (err: any) {
      res.status(403).send("Acesso Negado");
    }
  };
}
