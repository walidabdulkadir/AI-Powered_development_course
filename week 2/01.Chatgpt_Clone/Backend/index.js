import "dotenv/config";
import express from "express";
import db from "./db/db.config";
const app = express();

async function startserver(err) {
  try {
    const connection = await db.getConnection;
    connection.release();
    console.log("db connected");

    app.listen(5500, () => {
      if (err) {
        throw err;
      }
      console.log("Server is running at http://localhost:5500");
    });
  } catch (error) {
    console.error(err.message, "Error in starting server ");
  }
}
startserver();
