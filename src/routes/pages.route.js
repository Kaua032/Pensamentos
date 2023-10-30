const { Router } = require("express");
const { pageLoginController, pageHomeController, pageCreateThought } = require("../controllers/pages.controller");
const pagesRouter = Router();

pagesRouter.get('/', pageHomeController)
pagesRouter.get('/login', pageLoginController)

pagesRouter.get('/create', pageCreateThought)

module.exports = pagesRouter;
