//define a variable that touches the ingredient form in the html
const ingredientEl = document.querySelector("#ingredient-form");
const searchResultsEl = document.querySelector("#searchResults");
const recipeCardEl = document.querySelector("#recipeCard");
const recipeTitleEl = document.querySelector("#recipeTitle");
const ingredientListEl = document.querySelector("#ingredientList");
const directionsEl = document.querySelector("#directions");
const saveBtnEl = document.querySelector("#recipeSaveBtn");
// console.log(ingredientEl);

//when we use this, or require dotenv it gets angry, so currently we have hard-coded our api key
// import dotenv from "dotenv";
// dotenv.config();

//in this file you make the api all to spoonacula, once you have that data from your user input you then make your fetch post to you controller route. Once you have that string you then send your data to your new fetch for the actual recipe and instructions

const ingFormHandler = async function (event) {
  event.preventDefault();
  console.log($(this).data("api"));
  const apiKey = $(this).data("api");
  let checkedEl = $("input:checked");
  let selected = [];
  //take all of the things they checked and push it into the empty array called selected
  $.each(checkedEl, function () {
    selected.push($(this).val());
  });
  //this takes all the values checked and adds a ",+" to the end of each one - this is required formatting for our api url
  const apiString = selected.join(",+");
  console.log(apiString);

  //now that we have our string, make our call to the spoonacular api here and use await
  const spoonData = await fetch(
    // `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=apples,+sugar,+cinnamon&ranking=1`

    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=15ed70dde7cc4c0fb86eff7fae59f587&ingredients=${apiString}&ranking=1&includeInstructions=true`
  );

  //take the data we get back from our api fetch and make it the value of "recipes"
  const recipes = await spoonData.json();
  console.log("recipes line 29");
  console.log(recipes);
  //can we get just the title of index 1?
  // console.log(recipes[1].title);

  //take the object we get back and give us just the title and id. Make a new array containing an object for each of the 10 returned recipes with the key/value pairs of title and id
  const summary = recipes.map(({ title, id }) => ({ title, id }));
  console.log(summary);
  //we want to hide the ingredient lists
  ingredientEl.setAttribute("hidden", true);

  //we want to take the name of each of the recipes and add it to an empty array called recipeTitle
  let recipeTitle = [];
  summary.forEach(function (obj) {
    recipeTitle.push(obj.title);
  });
  //we want to take the id of each of the recipes and add it to an empty array called recipeID
  let recipeID = [];
  summary.forEach(function (obj) {
    recipeID.push(obj.id);
  });

  //what does reciptTitle and recipeID look like?
  console.log(recipeTitle);
  console.log(recipeID);

  // we want to create an ul in the recipe section so that we can see all of the names of the recipes that was returned to us
  //create a ul tag and append to it a li which has a a tag appeneded to it
  const ulTag = document.createElement("ul");
  console.log(ulTag + "hello");
  searchResultsEl.appendChild(ulTag);
  //give us the value of each index in the recipeTitle array, and make it clickable
  for (let i = 0; i < recipeTitle.length; i++) {
    console.log("I got the element");
    let recipeItem = recipeTitle[i];
    const liTag = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.appendChild(document.createTextNode(recipeItem));
    //give every recipe title a class of recipeLink, so we can add an event listener to everything with the class of "recipeLink"
    aTag.classList.add("recipeLink");
    aTag.setAttribute("style", "color:white; text-decoration:none;");
    liTag.appendChild(aTag);
    ulTag.appendChild(liTag);
  }
  //make everything with the class of recipeLink listen for a "click"
  const recipeLinksEl = document.querySelectorAll(".recipeLink");
  for (let i = 0; i < recipeLinksEl.length; i++) {
    recipeLinksEl[i].addEventListener("click", () => {
      let index = i;
      renderRecipeCard(recipeID, index);
    });
  }
};

//now we are going to make the recipe card - we will do this by making a second api call using the recipe id, and bringing back the ingredients, image, and instructions
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
    ingredientListEl.append(liTag);
  } //pull out the instructions from the object and append it to the dom using the created "p-tag"

  const directions = recipeCard.instructions;
  const pTag = document.createElement("p");

  pTag.textContent = directions;
  directionsEl.append(pTag);
  //give the save button the name attribute with the value of the recipe number
  saveBtnEl.setAttribute("name", `${recipeID[index]}`);
};

ingredientEl.addEventListener("submit", ingFormHandler);

//when the user clicks the MyRecipes button, it will redirect them to their user page, which which will render a list of their favorited recipe names. When they click on the recipe names, the recipe will show up.

//find the id associated with the save button
const saveRecipe = function (event) {
  event.preventDefault();
  console.log(saveBtnEl.getAttribute("name"));
};
//make a put request to /addFaforite

//make an event listener that listens for a click on the save button and runs the put function
saveBtnEl.addEventListener("click", saveRecipe);






//==========================================
// now make your call to the back end with your data - we know this works, but at this time there isn't a point to this post route
// const results = await fetch(`/api/results`, {
//   method: "POST",
//   body: JSON.stringify({
//     recipes,
//   }),
//   headers: { "Content-Type": "application/json" },
// });

// // const recipeData = await results.json();
// console.log(results);
// if (response.ok) {
//   location.replace("/api/results");
// }
//because we're not using the post route, we're going to hide the ingredient cards, and display the recipe title results we got from the api

//when the user clicks the button, the checked values are turned into a sting, have a ",+" added to the back end, and that string is added where it says apiString. It then sends the api request out

// recipes.forEach((recipes.title) => console.log(recipes.title));
// console.log(titleAndID);

//we know that recipes is an array of objects. We want to destructure each object in that array into individual recipes

// function recpTitle(recipes, title) {
//   let recpTitle = recipes.map((item) => item[title]);
//   return recpTitle;
// }
// const titleResult = recpTitle(recipes, "title");
// console.log("Title Result");
// console.log(titleResult);

// function recpID(recipes, id) {
//   let recpID = recipes.map((item) => item[id]);
//   return recpID;
// }
// const recpIDResult = recpID(recipes, "id");
// console.log("Recipe ID Result");
// console.log(recpIDResult);

// recpObjOne = {
//   title: titleResult[0],
//   IDofRecipe: recpIDResult[0],
// };
// console.log("RecpObj that combines Title Result and Recipe ID Result");
// console.log(recpObjOne);

// const titleAndID = [];
// const getTandID = recipes.map((moreData) => {
//   const recipeObj = { ...moreData };
//   console.log("recipeObj that breaks out 10 objects of individual recipes");
//   console.log(recipeObj);
//   titleAndID.push(recipeObj);
//   return recipeObj;
// });
// // console.log(recipeObj);
// console.log(getTandID);
// console.log(titleAndID);
