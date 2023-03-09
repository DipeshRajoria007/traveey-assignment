const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "traveey",
  password: "123",
  port: 5432,
});
module.exports = pool;
