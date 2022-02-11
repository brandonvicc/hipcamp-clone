"use strict";
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
    return Booking.findAll({ where: { spot_id } });
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

    return Booking.findByPk(newBook.id);
  };

  Booking.associate = function (models) {
    // associations can be defined here
    Booking.belongsTo(models.Spot, { foreignKey: "spot_id" });
    Booking.belongsTo(models.User, { foreignKey: "user_id" });
  };
  return Booking;
};
