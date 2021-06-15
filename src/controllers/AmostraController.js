import { createAmostra, getAll } from "../models/AmostraModel.js";

export async function createAmostraController(req, res) {
  try {
    const amostra = await createAmostra(req.body);

    res.status(201).json({
      codigo_da_amostra: amostra.codigo_amostra,
      resultado: amostra.laudo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

export async function listAllAmostras(req, res) {
  try {
    const amostras = await getAll();

    res.status(200).json(amostras)
  } catch (error) {
    res.status(500).json(error);
  }
}
