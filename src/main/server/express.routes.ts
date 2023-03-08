import { Express } from "express";
import { loginRoutes } from "../../app/features/login/routes/login.routes";

export const makeRoutes = (app: Express) => {
  app.use("/login", loginRoutes);
};
