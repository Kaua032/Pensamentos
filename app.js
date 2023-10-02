const express = require("express");
const router = require("./src/routes/index.js");

require("./src/database/index.js");

const app = express();

app.use(express.json());
app.use(router)

module.exports = app;