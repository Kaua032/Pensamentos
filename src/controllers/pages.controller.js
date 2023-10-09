const Thought = require("../models/Thought.js");
const Cookies = require("js-cookie");

const pageLoginController = (req, res) => {
  return res.render("login");
};

const pageDashboardController = (req, res) => {
  if (!Cookies.get("token")) {
    return res.render("home");
  } else {
    const thought = Thought.findAll();
    return res.render("home", { thought });
  }
};

module.exports = { pageLoginController, pageDashboardController };
