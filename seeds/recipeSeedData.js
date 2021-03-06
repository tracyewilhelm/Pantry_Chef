const { Recipe } = require("../models");

const recipeData = [
  {
    recipe_name: "Beef Enchilada Casserole",
    description: "beef enchilada casserole",
    ingredient_one: "8 flour tortillas",
    ingredient_two: "1 lb ground beef",
    ingredient_three: "1 can mild enchilada sauce",
    ingredient_four: "1 can black and corn salsa",
    ingredient_five: "2 cups shredded cheddar cheese",
    directions:
      "1. Heat oven to 350*F; 2. Fold tortillas in half and place folded side down in dish and set aside; 3. cook ground beef over medium high heat until no longer pink. add 1/4 cup enchilada sauce, bean and corn salsa, and 1 cup of shredded cheese. Stir to combine; 4. Divide beef mixture evenly in folded tortillas; wrap tortillas around filling and roll so seam is facing down; 5. Top with remaining enchilada sauce and cheese. Cover with foil and bake until cheese is bubbly",
  },
  {
    recipe_name: "sheep herders pie",
    description:
      "creamy beef and veggie mix topped with mashed potatoes and cheese",
    ingredient_one: "1 lb ground beef",
    ingredient_two: "1 cup mixed veggies",
    ingredient_three: "3 large potatoes",
    ingredient_four: "1 can cream of mushroom soup",
    ingredient_five: " 2 cups shredded cheese",
    directions:
      "1. Preheat oven to 350*F; 2. Fill a large pot with water and bring to a boil. Peel and quarter potatoes. Boil until soft; 3. While potatoes are boiling, in a seperate pan, brown ground beef until no longer pink. Add in mixed vegetables and cream of mushroom soup. Stir until combined and place in a baking dish. 4. Once potatoes are boiled, drain water and mash potatoes. Spoon mashed potatoes evenly over meat and veggie mixture. Cover with shredded cheese. Place in oven for 20-30 minutes or until cheese is bubbly",
  },
  {
    recipe_name: "chocolate chip pancakes",
    description: "delicious pancakes with a sprinkle of chocolate chips",
    ingredient_one: "1 egg",
    ingredient_two: "1 cup milk",
    ingredient_three: "1 cup flour",
    ingredient_four: "1 T baking powder",
    ingredient_five: "1/2 cup chocolate chips",
    directions:
      "1. heat gridle on medium-low heat; 2. In medium sized bowl whisk egg. 3. Add flour, milk, and baking powder, and stir until mixed. 4. Pour 1/4 cup of mix on hot gridle, place 5-7 chocolate chips in circle of batter. 5. Cook pancake for 2 minutes and then flip. Cook for another minute. Remove from gridle and enjoy",
  },
];

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;
