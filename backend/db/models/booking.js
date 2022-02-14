"use strict";
const { Spot } = require("./spot");

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      spot_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      guests: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );

  Booking.getAll = async function () {
    return await Booking.findAll();
  };

  Booking.getAllFromSpot = async function (spot_id) {
    return await Booking.findAll({ where: { spot_id }, include: Spot });
  };

  Booking.createBooking = async function ({
    spot_id,
    user_id,
    startDate,
    endDate,
    guests,
  }) {
    const newBook = await Booking.create({
      spot_id,
      user_id,
      startDate,
      endDate,
      guests,
    });

    return await Booking.findByPk(newBook.id);
  };

  Booking.deleteBook = async function (id) {
    const book = await Booking.findByPk(id);
    if (!book) throw new Error("No Book with that id");
    await Booking.destroy({ where: { id } });
  };

  Booking.associate = function (models) {
    // associations can be defined here
    Booking.belongsTo(models.Spot, {
      foreignKey: "spot_id",
      onDelete: "cascade",
      hooks: true,
    });
    Booking.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return Booking;
};
