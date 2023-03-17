import { Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";
import { UsuarioRepository } from "../repositories/usuario.repository";
import { CreateCandidatoUseCase } from "../usecases/create-candidato.usecase";

export class CandidatoController {
	static create: any;
	static listAll: any;
	public async create(req: Request, res: Response) {
		try {
			const usecase = new CreateCandidatoUseCase(new UsuarioRepository());
			const result = await usecase.execute(req.body);

			return HttpHelper.sucess(res, result, "Candidato criado com sucesso.");
		} catch (error: any) {
			return HttpHelper.serverError(res, error.toString());
		}
	}
}
