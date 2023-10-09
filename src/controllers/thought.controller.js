const Thought = require("../models/Thought.js");
const Cookies = require("js-cookie");

const CreateThoughtController = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.userId;
  try {
    if (!title || !description) {
      res.status(400).send({
        message: "Preencha todos os campos para cadastrar o seu perfil.",
      });
    }

    const thought = await Thought.create({ title, description, user_id: userId });
    res.status(201).send(thought);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { CreateThoughtController };
