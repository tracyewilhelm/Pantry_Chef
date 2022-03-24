// GET route for results page
const axios = require("axios");
const router = require("express").Router();

// How do I get the checked ingredients stored in a variable and inserted into the template literal?
// Readme generator or inquirer 

// How do I display the recipe a user has clicked on from the results page?



router.get("/", async (req, res) => {
    // Results of user search.  
    const dbRecipeData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=d7b803c21feb41b7b01d22f464050ff6&ingredients=apples,+flour,+sugar,+cinnamon&ranking=1`)
    .then((data) => {
        console.log(data.data)
        res.json(data.data)
    })

    // We need to render the results page.

    // Catch
})

module.exports = router