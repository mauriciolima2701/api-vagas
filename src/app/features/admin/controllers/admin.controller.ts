import { Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";
import { CreateAdminUseCase } from "../usecases/createAdmin.usecase";
import { CreateRecruiterUseCase } from "../usecases/create-recruiter.usecase";
import { UsuarioRepository } from "../../usuario/repositories/usuario.repository";
import { FindAllUsuarioUseCase } from "../../usuario/usecases/findAllusuarios.usecase";

export class AdminController {
	public async create(req: Request, res: Response) {
		try {
			const usecase = new CreateAdminUseCase(new UsuarioRepository());

			const result = await usecase.execute(req.body);

			return HttpHelper.sucess(res, result, "Admin criado com sucesso!");
		} catch (error: any) {
			return HttpHelper.serverError(res, error.toString());
		}
	}

	public async createRecruiter(req: Request, res: Response) {
		try {
			const usecase = new CreateRecruiterUseCase(new UsuarioRepository());

			const result = await usecase.execute(req.body);

			return HttpHelper.sucess(res, result, "Recrutador criado com sucesso!");
		} catch (error: any) {
			return HttpHelper.serverError(res, error.toString());
		}
	}

	public async listAll(req: Request, res: Response) {
		try {
			const usecase = new FindAllUsuarioUseCase(new UsuarioRepository());

			const result = await usecase.execute();

			return HttpHelper.sucess(res, result);
		} catch (error: any) {
			return HttpHelper.serverError(res, error.toString());
		}
	}
}
