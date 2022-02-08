const router = require("express").Router();
const asyncHandler = require("express-async-handler");

const usersRouter = require("./users");
const sessionRouter = require("./session");
const spotRouter = require("./spots");
const { setTokenCookie, restoreUser } = require("../../utils/auth.js");
const { User } = require("../../db/models");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/spots", spotRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
