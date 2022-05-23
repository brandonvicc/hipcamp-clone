const router = require("express").Router();
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { Spot, User, Booking } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");
const {
  singleMulterUpload,
  singlePublicFileUpload,
  retrievePrivateFile,
  deleteFile,
} = require("../../utils/awsS3");

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
  // check("img_link")
  //   .exists({ checkFalsy: true })
  //   .isLength({ min: 3, max: 255 })
  //   .withMessage(
  //     "Please provide image link with at least 3 character or less than 255 characters."
  //   ),
  handleValidationErrors,
];

router.post(
  "/",
  requireAuth,
  singleMulterUpload("img_link"),
  spotValidation,
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;

    const { address, city, state, country, lat, lng, name, price, img_link } =
      req.body;

    const spotImageUrl = await singlePublicFileUpload(req.file);

    const newSpot = await Spot.create({
      address,
      city,
      state,
      country,
      lat,
      lng,
      name,
      price,
      user_id: user.id,
      img_link: spotImageUrl,
    });
    const spot = await Spot.findByPk(newSpot.id, { include: User });

    return res.json({ spot });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allSpots = await Spot.findAll({
      include: User,
      order: [["createdAt", "DESC"]],
    });
    return res.json(allSpots);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const spot = await Spot.findByPk(req.params.id);
    if (!spot) throw new Error("No Campsite with that id");

    await Booking.destroy({
      where: { spot_id: req.params.id },
    });
    // const deletedSpot = await Spot.deleteSpot(req.params.id);
    await deleteFile(spot.img_link.split("com/")[1]);
    await spot.destroy();

    return res.json(spot);
  })
);

router.put(
  "/:id",
  requireAuth,
  singleMulterUpload("img_link"),
  spotValidation,
  asyncHandler(async (req, res) => {
    // const id = await Spot.updateSpot(req.body);

    const id = req.body.id;
    delete req.body.id;

    const { address, city, state, country, lat, lng, name, price, user_id } =
      req.body;

    let spot = await Spot.findByPk(id);
    console.log(id);
    console.log("\n\n\n", spot, "\n\n\n");

    let spotImageUrl;
    if (req.file) {
      spotImageUrl = await singlePublicFileUpload(req.file);
      await deleteFile(spot.img_link.split("com/")[1]);
    } else {
      spotImageUrl = spot.img_link;
    }

    await Spot.update(
      {
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        price,
        user_id,
        img_link: spotImageUrl,
      },
      { where: { id }, returning: true, plain: true }
    );

    spot = await Spot.findByPk(id);

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
