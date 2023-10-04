const { Router } = require("express");
const {
  CreateUserController,
  UpdateUserController,
  LoginController,
} = require("../controllers/user.controller.js");
const userRouter = Router();

userRouter.post("/create", CreateUserController);
userRouter.get("/login", LoginController);
userRouter.patch("/update/:id", UpdateUserController);

module.exports = userRouter;
