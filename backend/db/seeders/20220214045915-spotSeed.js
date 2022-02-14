"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    return queryInterface.bulkInsert(
      "Spots",
      [
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 main st",
          city: "Las Vegas",
          state: "Nevada",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Generic Woods",
          img_link:
            "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 apple st",
          city: "ole town",
          state: "Utah",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Lovely Woods",
          img_link:
            "https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 taco st",
          city: "Dallas",
          state: "Texas",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Rolling hills",
          img_link:
            "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 blackberry cobbler st",
          city: "in the woods",
          state: "Alabama",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Mud place",
          img_link:
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 blackberry cobbler st",
          city: "in the mountains",
          state: "West Virgina",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Not Wrong Turn",
          img_link:
            "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 snacks st",
          city: "MoreMountains",
          state: "Colorado",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Peaceful Place",
          img_link:
            "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 brownies st",
          city: "EvenMoreMountains",
          state: "Colorado",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Peaceful Palace",
          img_link:
            "https://images.unsplash.com/photo-1533414417583-f0ab99151186?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 brownies st",
          city: "EvenMoreMountains",
          state: "Colorado",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Peaceful Palace",
          img_link:
            "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 main st",
          city: "Las Vegas",
          state: "Nevada",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Generic Woods",
          img_link:
            "https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 apple st",
          city: "ole town",
          state: "Utah",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Lovely Woods",
          img_link:
            "https://images.unsplash.com/photo-1576176539998-0237d1ac6a85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 taco st",
          city: "Dallas",
          state: "Texas",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Rolling hills",
          img_link:
            "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 blackberry cobbler st",
          city: "in the woods",
          state: "Alabama",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Mud place",
          img_link:
            "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 peach cobbler st",
          city: "in the mountains",
          state: "West Virgina",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Not Wrong Turn",
          img_link:
            "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 snacks st",
          city: "MoreMountains",
          state: "Colorado",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Peaceful Place",
          img_link:
            "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 brownies st",
          city: "MostMountains",
          state: "Colorado",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Peaceful Palace",
          img_link:
            "https://images.unsplash.com/photo-1636659638188-4999d56db1e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          user_id: Math.floor(Math.random() * (10 - 1) + 1),
          address: "123 brownies st",
          city: "EvenMoreMountains",
          state: "Colorado",
          country: "USA",
          price: Math.floor(Math.random() * 999),
          lat: Math.floor(Math.random() * 90),
          lng: Math.floor(Math.random() * 90),
          name: "Peaceful Palace",
          img_link:
            "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhbXBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    return queryInterface.bulkDelete("Spots", null, {});
  },
};
