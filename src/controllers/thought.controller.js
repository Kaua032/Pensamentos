const Thought = require("../models/Thought.js");
const Cookies = require("js-cookie");

const CreateThoughtController = async (req, res) => {
  const { title } = req.body;
  const userId = req.userId;
  try {
    if (!title || !description) {
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

module.exports = { CreateThoughtController };
