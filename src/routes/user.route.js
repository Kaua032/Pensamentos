const { Router } = require('express');
const { CreateUserController } = require('../controllers/user.controller.js');
const userRouter = Router();

userRouter.post('/create', CreateUserController)

module.exports = userRouter;