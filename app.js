const express = require("express");
const router = require("./src/routes/index.js");
const exphbs = require("express-handlebars").create();
const Cookies = require("js-cookie");
const path = require("path");

require("./src/database/index.js");

const app = express();

app.set("views", path.join(__dirname, "src/views"));
app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine);
app.set("view engine", "handlebars");

app.use(router);

module.exports = app;
