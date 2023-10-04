const { Router } = require("express");
const { CreateUserController, UpdateUserController } = require("../controllers/user.controller.js");
const userRouter = Router();

userRouter.post("/create", CreateUserController);
userRouter.patch("/update/:id?", UpdateUserController)

module.exports = userRouter;
