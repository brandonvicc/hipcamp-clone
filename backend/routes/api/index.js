const router = require("express").Router();
const asyncHandler = require("express-async-handler");

const usersRouter = require("./users");
const sessionRouter = require("./session");
const spotRouter = require("./spots");
const bookRouter = require("./booking");
const { setTokenCookie, restoreUser } = require("../../utils/auth.js");
const { User } = require("../../db/models");

const mapsRouter = require("./maps");

router.use("/maps", mapsRouter);

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/spots", spotRouter);
router.use("/bookings", bookRouter);

router.post("/test", (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;
