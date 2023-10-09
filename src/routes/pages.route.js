const { Router } = require("express");
const { pageLoginController, pageDashboardController, pageHomeController } = require("../controllers/pages.controller");
const pagesRouter = Router();

pagesRouter.get('/', pageHomeController)
pagesRouter.get('/pensamentos', pageDashboardController)
pagesRouter.get('/login', pageLoginController)

module.exports = pagesRouter;
