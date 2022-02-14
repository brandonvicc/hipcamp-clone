"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
        {
          spot_id: Math.floor(Math.random() * (16 - 1) + 1),
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          startDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          endDate: `2022-0${Math.floor(
            Math.random() * (9 - 1) + 1
          )}-0${Math.floor(Math.random() * (9 - 1) + 1)}`,
          guests: Math.floor(Math.random() * (10 - 1) + 1),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
