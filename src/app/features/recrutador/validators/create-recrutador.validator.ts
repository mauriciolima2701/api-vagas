import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";

export const createRecrutadorValidator = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { nomeEmpresa, tipo } = req.body;

		if (!tipo) {
			return HttpHelper.badRequest(res, "Tipo não foi informado");
		}

		if (!nomeEmpresa) {
			return HttpHelper.badRequest(res, "Nome da empresa não foi informado");
		}

		next();
	} catch (error: any) {
		return HttpHelper.serverError(res, error.toString());
	}
};
