const { Router } = require("express");
const {
  CreateUserController,
  UpdateUserController,
  LoginController,
} = require("../controllers/user.controller.js");
const authMiddleware = require("../middlewares/auth.midlewares.js");
const userRouter = Router();

userRouter.post("/create", CreateUserController);
userRouter.post("/login", LoginController);
userRouter.patch("/update/:id?", UpdateUserController);

module.exports = userRouter;
