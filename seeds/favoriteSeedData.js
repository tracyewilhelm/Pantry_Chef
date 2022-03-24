const { Favorites } = require("../models");

const favoriteData = [
  {
    id: 33,
  },
];

const seedFavorites = () => Favorites.bulkCreate(favoriteData);

module.exports = seedFavorites;
