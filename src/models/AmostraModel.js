import knex from "../database/index.js";

const nota_de_corte = {
  cocaina: 0.5,
  anfetamina: 0.2,
  metanfetamina: 0.2,
  MDA: 0.2,
  MDMA: 0.2,
  THC: 0.05,
  morfina: 0.2,
  codeina: 0.2,
  heroina: 0.2,
};

export async function createAmostra(amostra) {
  amostra.laudo = false;

  if (
    nota_de_corte.cocaina <= amostra.cocaina &&
    amostra.benzoilecgonina <= 0.5 &&
    amostra.cocaetileno <= 0.5 &&
    amostra.norcocaina <= 0.5
  ) {
    amostra.laudo = true;
  } else if (nota_de_corte.anfetamina <= amostra.anfetamina) {
    amostra.laudo = true;
  } else if (nota_de_corte.metanfetamina <= amostra.metanfetamina) {
    amostra.laudo = true;
  } else if (nota_de_corte.MDA <= amostra.MDA) {
    amostra.laudo = true;
  } else if (nota_de_corte.MDMA <= amostra.MDMA) {
    amostra.laudo = true;
  } else if (nota_de_corte.THC <= amostra.THC) {
    amostra.laudo = true;
  } else if (nota_de_corte.morfina <= amostra.morfina) {
    amostra.laudo = true;
  } else if (nota_de_corte.codeina <= amostra.codeina) {
    amostra.laudo = true;
  } else if (nota_de_corte.heroina <= amostra.heroina) {
    amostra.laudo = true;
  }

  await knex("amostra_toxicologica").insert(amostra);

  return amostra;
}

export async function getAll() {
  return await knex.from("amostra_toxicologica").select();
}
