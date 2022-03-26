const sequelize = require("../config/connection");
const seedRecipe = require("./recipeSeedData");
const seedUser = require("./userSeedData");
const seedFavorite = require("./favoriteSeedData");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedRecipe();
  await seedFavorite();
  await seedUser();
};

seedDatabase();
