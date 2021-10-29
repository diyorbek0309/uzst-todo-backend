import express from "express";
import router from "./routes";
import DB from "./db";
import bodyParser from "body-parser";
require("dotenv").config();
import cors from "cors";
import Logger from "./middlewares/Logger";

const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(Logger);
app.use(router);

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
