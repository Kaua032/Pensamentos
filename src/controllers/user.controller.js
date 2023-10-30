const User = require("../models/User.js");
const Thought = require("../models/Thought.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Cookies = require("js-cookie");

dotenv.config();

const generateTokenController = (id) =>
  jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });

const CreateUserController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res.status(400).send({
        message: "Preencha todos os campos para cadastrar o seu perfil.",
      });
    }
    const user = await User.create({ name, email, password });
    const token = generateTokenController(user.id);
    Cookies.set("token", token, { expires: 1 });
    res.redirect("/thought/pensamentos");
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
      const token = generateTokenController(user.id);
      Cookies.set("token", token, { expires: 1 });
      res.render("home");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const UpdateUserController = async (req, res) => {
  const { name, email, password } = req.body;
  const id = req.userId;

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
