const User = require("../models/User.js");

const CreateUserController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res.status(400).send({
        message: "Preencha todos os campos para cadastrar o seu perfil.",
      });
    }
    const user = await User.create({ name, email, password });

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const LoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.status(400).send({
        message: "Preencha todos os campos para cadastrar o seu perfil.",
      });
    }

    const user = await User.findOne({ email: email, password: password });

    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const UpdateUserController = async (req, res) => {
  const { name, email, password } = req.body;
  const { id } = req.params;

  try {
    if (!name && !email && !password) {
      res.status(400).send({
        message:
          "Preencha pelo menos um dos campos para atualizar o seu perfil",
      });
    }
    const userUpdated = await User.update(
      { id: id },
      { name: name, email: email, password: password }
    );
    console.log(userUpdated);

    res.status(201).send(userUpdated);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  CreateUserController,
  LoginController,
  UpdateUserController,
};
