import mysql from "mysql2/promise";
// npm i mysql2
const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "gpt-admin",
  password: process.env.DB_PASSWORD || "98765",
  database: process.env.DB_DATABASE || "chatgpt-clone",
});
export default db;
