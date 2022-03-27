//when the user clicks the MyRecipes button, it will redirect them to their user page, which which will render a list of their favorited recipe names. When they click on the recipe names, the recipe will show up.

const response = await fetch("/api/user/:id", {
  method: "GET",
  body: JSON.stringify({}),
});

const userPageEl = document.querySelector("#favoriteRecipes");
userPageEl.addEventListener("click", toUserPage);

<<<<<<< HEAD

//  Create a post route from an event listener to grab the recipe selected as a favorite to add
// that recipe into the database, then append it to the dom to be displayed in that user's table. 
=======
const renderRecipeCard = async (recipeID, index) => {
  console.log(index);
  const recipeCardData = await fetch(
    `https://api.spoonacular.com/recipes/${recipeID[index]}/information?apiKey=15ed70dde7cc4c0fb86eff7fae59f587`
  );
  console.log("below fetch");
  //put all of the information from the fetch into readible form
  const recipeCard = await recipeCardData.json();

  //make a const for the image that we got back from the api
  const recpImg = document.createElement("img");
  recpImg.setAttribute("src", `${recipeCard.image}`);
  recipeCardEl.prepend(recpImg);
  console.log(recipeCard.image);

  //get the title name from the data object and add it to the dom using query selecto recipeTitleEl
  recipeTitleEl.textContent = recipeCard.title;
  //take the array of ingredients and pull out the values of "original" and put them in the ingredientItem variable
  for (let i = 0; i < recipeCard.extendedIngredients.length; i++) {
    let ingredientItem = recipeCard.extendedIngredients[i].original;
    //make a list of those ingredient items
    const liTag = document.createElement("li");
    liTag.textContent = ingredientItem;
    ingredientListEl.appendChild(liTag);
  } //pull out the instructions from the object and append it to the dom using the created "p-tag"
  const directions = recipeCard.instructions;
  const pTag = document.createElement("p");
  pTag.textContent = directions;
  directionsEl.append(pTag);
};
>>>>>>> main
