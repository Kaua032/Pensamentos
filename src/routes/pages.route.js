const { Router } = require("express");
const { pageLoginController, pageDashboardController, pageHomeController, pageCreateThought } = require("../controllers/pages.controller");
const pagesRouter = Router();

pagesRouter.get('/', pageHomeController)
pagesRouter.get('/pensamentos', pageDashboardController)
pagesRouter.get('/login', pageLoginController)

pagesRouter.get('/create', pageCreateThought)

module.exports = pagesRouter;
