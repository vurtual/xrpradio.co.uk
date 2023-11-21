const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8888;
const URL = process.env.URL || "http://localhost";

app.listen(PORT, () => {
  `Server initialised on ${URL}:${PORT}`;
});