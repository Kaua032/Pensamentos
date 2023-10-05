const { Router } = require("express");
const { pageLoginController } = require("../controllers/pages.controller");
const pagesRouter = Router();

pagesRouter.get('/', pageLoginController)

module.exports = pagesRouter;
