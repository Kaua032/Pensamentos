const Thought = require("../models/Thought.js");
const User = require("../models/User.js");
const Cookies = require("js-cookie");

const pageLoginController = (req, res) => {
  return res.render("login");
};

const pageHomeController = async (req, res) => {
  const thought = await Thought.findAll({
    include: [
      {
        model: User,
        as: "user",
        attributes: ["id", "email"], // Substitua 'name' pelo nome do campo do nome do usuário em seu modelo de usuário
      },
    ],
  });
  console.log(thought);
  res.render("home");
};

const pageCreateThought = async (req, res) => {
  res.render("criarPensamento");
};

module.exports = {
  pageLoginController,
  pageHomeController,
  pageCreateThought,
};
