import { badRequestError } from "./../../../shared/util/http.helper";
import { NextFunction, Request, Response } from "express";
import { serverError } from "../../../shared/util/http.helper";

export const createRecrutadorValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { nomeEmpresa } = req.body;

        if (!nomeEmpresa) {
            return badRequestError(res, "Nome da empresa não foi informado");
        }

        next();
    } catch (error: any) {
        return serverError(res, error.toString());
    }
};
