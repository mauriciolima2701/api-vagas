import { Router } from "express";
import { CandidatoController } from "../controllers/candidato.controller";
import { checkDuplicateUserValidator } from "../validators/checkDuplicateUser.validator";
import { createUserValidator } from "../validators/createUser.validator";

const candidatoRoutes = Router();

candidatoRoutes.post(
	"/",
	[createUserValidator, checkDuplicateUserValidator],
	new CandidatoController().create
);

export { candidatoRoutes };
