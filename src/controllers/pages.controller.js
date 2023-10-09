const Thought = require("../models/Thought.js");
const User = require("../models/User.js");
const Cookies = require("js-cookie");

const pageLoginController = (req, res) => {
  return res.render("login");
};

const pageDashboardController = (req, res) => {
  if (!Cookies.get("token")) {
    return res.render("thought");
  } else {
    const thought = Thought.findAll();
    return res.render("thought", { thought });
  }
};

const pageHomeController = async (req, res) => {
  const thought = await Thought.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'name'], // Substitua 'name' pelo nome do campo do nome do usuário em seu modelo de usuário
      },
    ],
  })
  console.log(thought)
  res.render("home");
};

module.exports = {
  pageLoginController,
  pageDashboardController,
  pageHomeController,
};