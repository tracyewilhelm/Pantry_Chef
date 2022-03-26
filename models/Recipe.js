const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Recipe extends Model {}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
      type: DataTypes.STRING,

      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ingredient_one: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredient_two: {
      type: DataTypes.STRING,
    },
    ingredient_three: {
      type: DataTypes.STRING,
    },
    ingredient_four: {
      type: DataTypes.STRING,
    },
    ingredient_five: {
      type: DataTypes.STRING,
    },
    directions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "recipe",
  }
);

module.exports = Recipe;
