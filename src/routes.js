import express from "express";

import { RegisterUserController } from "./controllers/UserController.js";

const routes = express.Router();

routes.post("/user", RegisterUserController);

export default routes;
