import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";

export const checkLoginAdminValidator = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { tipo } = req.body;

		if (tipo !== "A") {
			return HttpHelper.badRequest(res, "Acesso nao autorizado", 405);
		}
		return next();
	} catch (error: any) {
		return HttpHelper.serverError(res, error.toString());
	}
};
