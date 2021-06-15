import express from "express";
import { withJWTAuthMiddleware } from "express-kun";

import { RegisterUserController, LoginUserController } from "./controllers/UserController.js";
import { createAmostraController, listAllAmostras } from "./controllers/AmostraController.js";

const routes = express.Router();

const protectedRouter = withJWTAuthMiddleware(routes, "secret");

routes.post("/register", RegisterUserController);
routes.post("/login", LoginUserController);

protectedRouter.get("/amostras", listAllAmostras)
protectedRouter.post("/amostra", createAmostraController)

export default routes;
