// GET route for results page
const axios = require("axios");
const router = require("express").Router();
const apiString = require("../../public/js/index.js");

router.get("/", async (req, res) => {
  // Results of user search.
  const recipeData = await axios
    .get(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=d7b803c21feb41b7b01d22f464050ff6&ingredients=${apiString}&ranking=1&includeInstructions=true`
    )
    .then((data) => {
      console.log(data.data);
      res.json(data.data);
    });
    res.render("results")



  // We need to render the results page.

  // Catch
});

module.exports = router;
