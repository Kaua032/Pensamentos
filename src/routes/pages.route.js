const { Router } = require("express");
const { pageLoginController, pageDashboardController } = require("../controllers/pages.controller");
const pagesRouter = Router();

pagesRouter.get('/pensamentos', pageDashboardController)
pagesRouter.get('/login', pageLoginController)

module.exports = pagesRouter;
