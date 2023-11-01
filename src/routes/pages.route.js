const { Router } = require("express");
const {
  pageLoginController,
  pageHomeController,
  pageCreateThought,
  pageRegisterUser,
  pageEditController,
} = require("../controllers/pages.controller");
const pagesRouter = Router();

pagesRouter.get("/", pageHomeController);
pagesRouter.get("/login", pageLoginController);

pagesRouter.get("/create", pageCreateThought);
pagesRouter.get("/register", pageRegisterUser);

pagesRouter.get("/edit/:id", pageEditController);

module.exports = pagesRouter;
