export const up = function (knex) {
  return knex.schema.createTable("amostra_toxicologica", function (table) {
    table.integer("codigo_amostra").unique();
    table.boolean("laudo");
    table.float("cocaina");
    table.float("anfetamina");
    table.float("metanfetamina");
    table.float("MDA");
    table.float("MDMA");
    table.float("THC");
    table.float("morfina");
    table.float("codeina");
    table.float("heroina");
    table.float("benzoilecgonina");
    table.float("cocaetileno");
    table.float("norcocaina");
  });
};

export const down = function (knex) {
  return knex.schema.dropTable("amostra_toxicologica");
};
