const { Router } = require("express");
const userRouter = require("./user.route.js");
const thoughtRouter = require("./thought.route.js");

const router = Router();

router.use("/user", userRouter);
router.use("/thought", thoughtRouter);

module.exports = router;
