import { Router } from "express";
import userRouter from './user.route.js'
import thoughtRouter from './thought.route.js'

const router = Router();

router.use('/user',  userRouter)
router.use('/thought', thoughtRouter)

export default router;