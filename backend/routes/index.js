const express = require("express");

const router = express.Router();

router.get("/hello/world", (req, res) => {
  res.cookie("XSRF-TOKEN", res.csrfToken());
  res.send("Hello World!");
});

module.exports = router;
