import { Router } from 'express';
import { CreateUserController } from '../controllers/user.controller.js';
const userRouter = Router();

userRouter.post('/create', CreateUserController)

export default userRouter;