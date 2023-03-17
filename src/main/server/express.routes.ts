import { Express } from "express";
import { loginRoutes } from "../../app/features/login/routes/login.routes";
import { authorizationMiddleware } from "../../app/shared/middlewares/authorization.middlware";
import { adminRoutes } from "../../app/features/admin/routes/admin.routes";
import { candidatoRoutes } from "../../app/features/usuario/routes/candidato.routes";

export const makeRoutes = (app: Express) => {
	app.use("/login", loginRoutes);
	app.use("/admin", adminRoutes);
	// app.use("/recrutador", recrutadorRoutes());
	app.use("/candidato", candidatoRoutes);

	// app.get('/teste', authorizationMiddleware, (req: any, res) => {
	//     console.log('Na Rota ou no Controller', req.user.uuid);
	//     res.json({
	//         teste: '1',
	//     });
	// });
};
