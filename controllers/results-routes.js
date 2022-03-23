// GET route for results page
const axios = require("axios");
const router = require("express").Router();




router.get("/", async (req, res) => {
    // Results of user search.  
    const dbRecipeData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=d7b803c21feb41b7b01d22f464050ff6&ingredients=apples,+flour,+sugar,+cinnamon&ranking=1`)
    .then((data) => {
        console.log(data.data)
        res.json(data.data)
    })

    // We need to include the Recipe model.
    // We want all of the attributes in the recipe model 
    
    
    // Sequelize 
    // const recipes = dbRecipeData.map((recipe) =>
    //   recipe.get({ plain: true })
    // );

    // We need to render the results page.

    // Catch
})

module.exports = router