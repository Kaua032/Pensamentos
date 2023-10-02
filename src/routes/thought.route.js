const { Router } = require('express');
const { CreateThoughtController } = require('../controllers/thought.controller.js');
const thoughtRouter = Router();

thoughtRouter.post('/create', CreateThoughtController);


module.exports = thoughtRouter;