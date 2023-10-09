const { Router } = require('express');
const { CreateThoughtController } = require('../controllers/thought.controller.js');
const authMiddleware = require('../middlewares/auth.midlewares.js');
const thoughtRouter = Router();

thoughtRouter.post('/create', authMiddleware, CreateThoughtController);


module.exports = thoughtRouter;