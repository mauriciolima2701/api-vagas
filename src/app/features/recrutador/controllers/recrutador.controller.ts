import { Request, Response } from "express";

import { UsuarioRepository } from "../../usuario/repositories/usuario.repository";
import { HttpHelper } from "../../../shared/util/http.helper";
import { CreateRecruiterUseCase } from "../../admin/usecases/create-recruiter.usecase";

export class RecrutadorController {
	public async create(req: Request, res: Response) {
		try {
			const usecase = new CreateRecruiterUseCase(new UsuarioRepository());
			const result = await usecase.execute(req.body);

			return HttpHelper.sucess(res, result, "Recrutador criado com sucesso.");
		} catch (error: any) {
			return HttpHelper.serverError(res, error.toString());
		}
	}
}
