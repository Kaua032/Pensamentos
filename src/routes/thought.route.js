const { Router } = require('express');
const { CreateThoughtController, FindAllThoughtController, FindAndRemoveController, FindAndUpdateController } = require('../controllers/thought.controller.js');
const authMiddleware = require('../middlewares/auth.midlewares.js');
const thoughtRouter = Router();

thoughtRouter.post('/create', CreateThoughtController);
thoughtRouter.get('/pensamentos', FindAllThoughtController);
thoughtRouter.post('/remove/:id', FindAndRemoveController)
thoughtRouter.post('/update/:id', FindAndUpdateController);


module.exports = thoughtRouter;