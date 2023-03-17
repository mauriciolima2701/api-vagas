import { Router } from "express";
import { AdminController } from "../controllers/admin.controller";
import { createUserValidator } from "../../usuario/validators/createUser.validator";
import { checkDuplicateUserValidator } from "../../usuario/validators/checkDuplicateUser.validator";
import { checkLoginAdminValidator } from "../validators/checkLogin.admin.validator";
import { createRecrutadorValidator } from "../../recrutador/validators/create-recrutador.validator";

const adminRoutes = Router();

adminRoutes.post(
	"/",
	[createUserValidator, checkDuplicateUserValidator],
	new AdminController().create
);
adminRoutes.get("/", new AdminController().listAll);

adminRoutes.post(
	"/recrutador",
	[
		checkLoginAdminValidator,
		createUserValidator,
		createRecrutadorValidator,
		checkDuplicateUserValidator,
	],
	new AdminController().createRecruiter
);

export { adminRoutes };
