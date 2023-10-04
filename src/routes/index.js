const { Router } = require("express");
const userRouter = require("./user.route.js");
const thoughtRouter = require("./thought.route.js");
const pagesRouter = require("./pages.route.js");

const router = Router();

router.use("/pages", pagesRouter);
router.use("/user", userRouter);
router.use("/thought", thoughtRouter);

module.exports = router;
