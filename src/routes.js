import express from "express";
import { withJWTAuthMiddleware } from "express-kun";

import { RegisterUserController, LoginUserController } from "./controllers/UserController.js";

const routes = express.Router();

const protectedRouter = withJWTAuthMiddleware(routes, "secret");

routes.post("/register", RegisterUserController);
routes.post("/login", LoginUserController);

protectedRouter.get("/", (req, res) => {
  console.log("aa")
})

export default routes;
