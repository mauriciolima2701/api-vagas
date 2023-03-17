import { createRecrutadorValidator } from "./../validators/create-recrutador.validator";
import { RecrutadorController } from "./../controllers/recrutador.controller";
import { Router } from "express";

import { checkLoginRecrutadorValidator } from "../validators/check-login-recrutador.validator";
import { checkLoginAdminValidator } from "../../admin/validators/checkLogin.admin.validator";
import { createUserValidator } from "../../usuario/validators/createUser.validator";
import { checkDuplicateUserValidator } from "../../usuario/validators/checkDuplicateUser.validator";

export const recrutadorRoutes = () => {
	// const router = Router();
	// router.post(
	//     '/',
	//     [
	//         checkLoginAdminValidator,
	//         createUserValidator,
	//         createRecrutadorValidator,
	//         checkDuplicateUserValidator,
	//     ],
	//     new RecrutadorController().create
	// );
	// return router;
};
