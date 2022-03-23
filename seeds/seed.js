const sequelize = require("../config/connection");

const Recipe = require("../models/Recipe");
const User = require("../models/User");

const recipeSeedData = require("./recipeSeedData.json");
const userSeedData = require("./userSeedData.json");

const seedDatabase = () => {
  return sequelize.sync({ force: true }).then(() => {
    Recipe.bulkCreate(recipeSeedData).then(() => {
      User.bulkCreate(userSeedData).then(() => {
        console.log("All Seeds Planted");
      });
    });
  });
};

seedDatabase();
