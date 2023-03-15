import { badRequestError } from "./../../../shared/util/http.helper";
import { TipoUser } from "./../../../models/user.model";
import { NextFunction, Request, Response } from "express";
import { serverError } from "../../../shared/util/http.helper";

export const checkLoginRecrutadorValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = JSON.parse(req.headers["user"]?.toString() ?? "{}");

        if (user.tipo !== TipoUser.Recrutador) {
            return badRequestError(res, "Acesso nao autorizado para este perfil", 405);
        }

        return next();
    } catch (error: any) {
        return serverError(res, error.toString());
    }
};
