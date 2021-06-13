import { RegisterUser } from "../models/UserModel.js";

export async function RegisterUserController(req, res) {
  try {
    const a = await RegisterUser();

    res.status(200).json(a);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
