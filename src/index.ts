import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server Port : ", port);
});
