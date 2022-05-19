const router = require("express").Router();
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { Booking, Spot, User } = require("../../db/models");
const { handleValidationErrors } = require("../../utils/validation");
const { requireAuth, restoreUser } = require("../../utils/auth");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allBooks = await Booking.getAll();
    return res.json(allBooks);
  })
);

router.get(
  "/spots/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const spotBookings = await Booking.findAll({
      where: { spot_id: id },
      include: [{ model: Spot, include: User }, User],
    });
    return res.json(spotBookings);
  })
);

const bookingValidations = [
  check("spot_id")
    .isInt({ gt: 0 })
    .withMessage("Must choose a camping spot.")
    .exists({ checkFalsy: true })
    .withMessage("Must book at a existing camping spot."),
  check("startDate")
    .exists({ checkFalsy: true })
    .withMessage("Must be a valid date."),
  check("endDate")
    .exists({ checkFalsy: true })
    .withMessage("Must be a valid date."),
  check("endDate")
    .custom((value, { req }) => {
      console.log(
        "\n\n\n",
        Date.parse(req.body.startDate),
        "\n",
        Date.parse(req.body.endDate),
        "\n\n\n"
      );

      if (Date.parse(req.body.startDate) > Date.parse(req.body.endDate))
        throw new Error(
          "End date must be scheduled at future date or same date from start date."
        );

      return true;
    })
    .withMessage(
      "End date must be scheduled at future date or same date from start date."
    ),
  check("guests")
    .exists({ checkFalsy: true })
    .isInt({ gt: 0 })
    .withMessage("Must have at least 1 guest to book."),
  handleValidationErrors,
];

router.post(
  "/",
  requireAuth,
  bookingValidations,
  restoreUser,
  asyncHandler(async (req, res) => {
    const { user } = req;
    const { spot_id, startDate, endDate, guests } = req.body;

    const book = await Booking.createBooking({
      spot_id,
      user_id: user.dataValues.id,
      startDate,
      endDate,
      guests,
    });
    return res.json({ book });
  })
);

router.delete(
  "/:id",
  requireAuth,
  asyncHandler(async (req, res) => {
    const deletedBook = await Booking.deleteBook(req.params.id);
    return res.json(deletedBook);
  })
);

module.exports = router;
