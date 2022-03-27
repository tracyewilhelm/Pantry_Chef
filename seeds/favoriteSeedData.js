const { Favorite } = require("../models");

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

const seedFavorite = () => Favorite.bulkCreate(favoriteData);

module.exports = seedFavorite;
