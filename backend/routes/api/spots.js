const router = require("express").Router();
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { Spot, User } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");

const spotValidation = [
  check("address")
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 255 })
    .withMessage(
      "Please provide address with at least 3 character or less than 255 characters"
    ),
  check("city")
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 50 })
    .withMessage(
      "Please provide city with at least 3 character or less than 50 characters"
    ),
  check("state")
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 15 })
    .withMessage(
      "Please provide state with at least 3 character or less than 15 characters."
    ),
  check("country")
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 100 })
    .withMessage(
      "Please provide country with at least 3 character or less than 100 characters."
    ),
  check("name")
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 150 })
    .withMessage(
      "Please provide name with at least 3 character or less than 150 characters."
    ),
  check("price")
    .exists({ checkFalsy: true })
    .withMessage("Please provide price."),
  check("img_link")
    .exists({ checkFalsy: true })
    .isLength({ min: 3, max: 255 })
    .withMessage(
      "Please provide image link with at least 3 character or less than 255 characters."
    ),
  handleValidationErrors,
];

router.post(
  "/",
  requireAuth,
  spotValidation,
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;

    const { address, city, state, country, lat, lng, name, price, img_link } =
      req.body;
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
      img_link,
    });

    return res.json({ spot });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allSpots = await Spot.findAll({ include: User });
    return res.json(allSpots);
  })
);

router.delete(
  "/:id",
  requireAuth,
  spotValidation,
  asyncHandler(async (req, res) => {
    const deletedSpot = await Spot.deleteSpot(req.params.id);
    return res.json(deletedSpot);
  })
);

router.put(
  "/:id",
  requireAuth,
  spotValidation,
  asyncHandler(async (req, res) => {
    const id = await Spot.updateSpot(req.body);
    const spot = await Spot.getOne(id);
    return res.json(spot);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const spot = await Spot.getOne(id);
    return res.json(spot);
  })
);

module.exports = router;
