const router = require("express").Router();
const { check } = require("express-validator");
const asyncHandler = require("express-async-handler");

const { Booking } = require("../../db/models");
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
    const spotBookings = await Booking.getAllFromSpot(id);
    return res.json(spotBookings);
  })
);

router.post(
  "/",
  requireAuth,
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

module.exports = router;
