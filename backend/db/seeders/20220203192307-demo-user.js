"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "user1@user.io",
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync("password2"),
        },
        {
          email: "user2@user.io",
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          email: "user@user.io",
          username: "JohnJohn",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          email: "user2@user.com",
          username: "SusanLee",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          email: "user22@user.io",
          username: "ChristopherBeatrice",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          email: "user24@user.io",
          username: "plzCampHere",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          email: "user254@user.io",
          username: "BilliamWilliam",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          email: "use2@user.io",
          username: "greenbayShouldWon:(",
          hashedPassword: bcrypt.hashSync("password3"),
        },
        {
          email: "user2@user.net",
          username: "demouser",
          hashedPassword: bcrypt.hashSync("password"),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      {
        username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      },
      {}
    );
  },
};
