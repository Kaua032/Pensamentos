const User = require("../models/User.js");
const bcrypt = require("bcrypt");

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

    const user = await User.findOne({ where: { email } });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).send(user);
    }
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
          "Preencha pelo menos um dos campos para atualizar o seu perfil.",
      });
    }
    const userUpdated = await User.update(
      { name, email, password },
      { where: { id } }
    );

    res.status(201).send({ message: "Usuário atualizado com sucesso." });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  CreateUserController,
  LoginController,
  UpdateUserController,
};
