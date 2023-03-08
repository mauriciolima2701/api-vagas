import { Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";
import { UsuarioRepository } from "../../usuario/repositories/usuario.repository";
import { LoginUseCase } from "../usecases/login.usecase";

export class LoginController {
  public async login(req: Request, res: Response) {
    const { username, senha } = req.body;

    const useCase = new LoginUseCase(new UsuarioRepository());
    const result = await useCase.execute({
      username,
      senha,
    });

    return HttpHelper.sucess(res, result);
  }
}
