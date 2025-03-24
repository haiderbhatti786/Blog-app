import mysql from "mysql2"; // Changed from mysql to mysql2
export const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3310,
  user: "root",
  password: "root",
  database: "blog",
});
