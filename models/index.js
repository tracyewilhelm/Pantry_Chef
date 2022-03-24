const Recipe = require("./Recipe");
const User = require("./User");
const Favorites = require("./Favorites");

module.exports = { Recipe, User, Favorites };

//a user can have many favorites
User.hasMany(Favorites, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

//a favorite can have many users
Favorites.hasMany(User, {
  foreignKey: "user_id",
});
