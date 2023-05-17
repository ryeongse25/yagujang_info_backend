const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("Server Port : ", port);
});
