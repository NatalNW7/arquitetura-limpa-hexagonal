exports.up = async function (knex) {
  const existe = await knex.schema.hasTable("usuarios");

  if (existe) return;

  return knex.schema.createTable("usuarios", (table) => {
    table.uuid("id").primary();
    table.string("nome").useNullAsDefault();
    table.string("email").useNullAsDefault().unique();
    table.string("senha").useNullAsDefault();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("usuario");
};
