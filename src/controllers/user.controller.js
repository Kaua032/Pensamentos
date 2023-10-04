const User = require("../models/User.js");

const CreateUserController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res
        .status(400)
        .send({
          message: "Preencha todos os campos para cadastrar o seu perfil.",
        });
    }
    const user = await User.create({ name, email, password });
    console.log(user);

    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { CreateUserController };
