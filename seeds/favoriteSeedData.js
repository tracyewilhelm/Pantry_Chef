const { Favorite } = require("../models");

const favoriteData = [
  {
    id: 33,
    name: "Lamb Confit",
  },
  {
    id: 43,
    name: "Blueberry Smoothie",
  },
  {
    id: 53,
    name: "Banana Split",
  },
];

const seedFavorite = () => Favorite.bulkCreate(favoriteData);

module.exports = seedFavorite;
