const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./mydb.sqlite",
  },
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
