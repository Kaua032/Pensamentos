const Thought = require("../models/Thought.js");
const Cookies = require("js-cookie");

const CreateThoughtController = async (req, res) => {
  const { title } = req.body;
  const userId = req.userId;
  try {
    if (!title) {
      res.status(400).send({
        message: "Preencha todos os campos para cadastrar o seu perfil.",
      });
    }

    const thought = await Thought.create({ title, user_id: userId });

    res.redirect('/');
  } catch (error) {
    res.send({ message: error.message });
  }
};
const FindAllThoughtController = (req, res) => {
  if (!Cookies.get("token")) {
    return res.render("thought");
  } else {
    const thought = Thought.findAll();
    return res.render("thought", { thought });
  }
};

module.exports = { CreateThoughtController, FindAllThoughtController };
