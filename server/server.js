const express = require("express");
const app = express();
const home = require("./router/home.js");
require("dotenv").config();

const PORT = process.env.PORT || 8888;
const URL = process.env.URL || "http://localhost";

app.use(express.static("client/public"));
app.use("/", home);

app.listen(PORT, () => {
  console.log(`Server initialised on ${URL}:${PORT}`);
});
