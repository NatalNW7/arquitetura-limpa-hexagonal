const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: ".env" });

module.exports = {
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "mydb.sqlite"),
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
  useNullAsDefault: true,
};

//  para usar com postgress
// module.exports = {
//   client: "pg",
//   connection: dotenv.DB_URL,
//   migrations: {
//     tableName: "knex_migrations",
//   },
//   pool: {
//     min: 2,
//     max: 10,
//   },
// };
