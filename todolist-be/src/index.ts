import express from "express";
import routes from "./routes";
import DB from "./db";
require("dotenv").config();
import cors from "cors";

const app = express();

app.use(cors());
app.use(routes);

if (!process.env) {
  throw new Error(`.env file required. Please create`);
}
const PORT = process.env.PORT || 3000;

(async function () {
  try {
    const db = new DB();
    db.connect();

    app.listen(PORT, () => {
      console.log(`App is running on port ${PORT}.`);
    });

    console.log("Database connection initialized.");
  } catch (e) {
    throw new Error(`DB connection error: ${e}`);
  }
})();
