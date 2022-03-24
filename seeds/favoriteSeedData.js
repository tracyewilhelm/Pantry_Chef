const { Favorites } = require("../models");

const favoriteData = [
  {
    id: 33,
  },
  {
    id: 43,
  },
  {
    id: 53,
  },
];

const seedFavorites = () => Favorites.bulkCreate(favoriteData);

module.exports = seedFavorites;
