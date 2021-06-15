import jwt from "jsonwebtoken";

import { createUser, readUser } from "../models/UserModel.js";

export async function RegisterUserController(req, res) {
  try {
    await createUser(req.body);

    const token = jwt.sign(
      {
        user: {
          email: req.body.email,
        },
      },
      "secret"
    );

    res.status(201).json(token);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export async function LoginUserController(req, res) {
  try {
    const user = await readUser(req.body.email);

    if (!user[0]) {
      return res.status(404).json({ error: "usuario não encontrado" });
    }

    if (user[0].password !== req.body.password) {
      return res.status(401).json({ error: "senha errada" });
    }
    const token = jwt.sign(
      {
        user: {
          email: req.body.email,
        },
      },
      "secret"
    );

    res.status(200).send({token});
  } catch (error) {
    res.status(500).send(error);
  }
}
