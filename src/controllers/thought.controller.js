const Thought = require("../models/Thought.js");

const CreateThoughtController = async (req, res) => {
  const { title, description } = req.body;
  try {
    if (!title || !description) {
      res
        .status(400)
        .send({
          message: "Preencha todos os campos para cadastrar o seu perfil.",
        });
    }

    const thought = await Thought.create({ title, description });
    res.status(201).send(thought);
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { CreateThoughtController };
