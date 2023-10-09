const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const Cookies = require("js-cookie");

dotenv.config();

const authMiddleware = async (req, res, next) => {
  try {
    console.log(Cookies.get("token"));
    if (!Cookies.get("token")) {
      return res.send(401);
    }
    const authorization = `Bearer ${Cookies.get("token")}`;

    if (!authorization) {
      return res.send(401);
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.send(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.send(401);
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Token invalido!" });
      }
      const user = await User.findOne({ where: { id: decoded.id } });

      if (!user || !user.id) {
        return req.status(401).send({ message: "Invalido Token!" });
      }

      req.userId = user.id;
      return next();
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = authMiddleware;
