const Recipe = require("./Recipe");
const User = require("./User");
const Favorites = require("./Favorites");

//a favorite can have many users
Favorites.belongsToMany(User, {
  through: "userFavorite",
});

//a user can have many favorites
User.belongsToMany(Favorites, {
  through: "userFavorite",
});

module.exports = { Recipe, User, Favorites };
