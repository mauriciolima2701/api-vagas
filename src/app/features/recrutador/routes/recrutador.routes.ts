import { createRecrutadorValidator } from "./../validators/create-recrutador.validator";
import { RecrutadorController } from "./../controllers/recrutador.controller";
import { Router } from "express";

import { checkLoginRecrutadorValidator } from "../validators/checkLogin.recrutador.validator";
import { checkLoginAdminValidator } from "../../admin/validators/checkLogin.admin.validator";
import { createUserValidator } from "../../usuario/validators/createUser.validator";
import { checkDuplicateUserValidator } from "../../usuario/validators/checkDuplicateUser.validator";

const recrutadorRoutes = Router();

recrutadorRoutes.post("/vagas", [checkLoginRecrutadorValidator]);

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
