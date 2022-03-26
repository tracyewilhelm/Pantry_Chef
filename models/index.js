const Recipe = require("./Recipe");
const User = require("./User");
const Favorite = require("./Favorite");

//a favorite can have many users
Favorite.belongsToMany(User, {
  through: "userFavorite",
});

//a user can have many favorite
User.belongsToMany(Favorite, {
  through: "userFavorite",
});

module.exports = { Recipe, User, Favorite };
