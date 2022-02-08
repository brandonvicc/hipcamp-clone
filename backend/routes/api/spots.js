const router = require("express").Router();
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { Spot } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");

router.post(
  "/",
  requireAuth,
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;

    console.log(user.dataValues.id);

    const { address, city, state, country, lat, lng, name, price } = req.body;
    const spot = await Spot.createSpot({
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      price,
      user_id: user.dataValues.id,
    });

    return res.json({ spot });
  })
);

module.exports = router;
