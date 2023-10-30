const { Router } = require('express');
const { CreateThoughtController, FindAllThoughtController } = require('../controllers/thought.controller.js');
const authMiddleware = require('../middlewares/auth.midlewares.js');
const thoughtRouter = Router();

thoughtRouter.post('/create', authMiddleware, CreateThoughtController);
thoughtRouter.get('/pensamentos', FindAllThoughtController);


module.exports = thoughtRouter;