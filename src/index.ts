import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import yagujangRoute from "./routes/yagujang";

const app = express();
const port = 8000;
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/yagujang", yagujangRoute);

if (process.env.MONGODB_URL)
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch((err) => {
      console.log(err);
    });

app.listen(port, () => {
  console.log("Server Port : ", port);
});
