import { Router } from 'express';
import { CreateThoughtController } from '../controllers/thought.controller.js';
const thoughtRouter = Router();

thoughtRouter.post('/create', CreateThoughtController);


export default thoughtRouter;