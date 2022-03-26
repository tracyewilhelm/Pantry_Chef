//define a variable that touches the ingredient form in the html
const ingredientEl = document.querySelector("#ingredient-form");
console.log(ingredientEl);
// import dotenv from "dotenv";
// dotenv.config();

//in this file you make the api all to spoonacula, once you have that data from your user input you then make your fetch post to you controller route. Once you have that string you then send your data to your new fetch for the actual recipe and instructions

const ingFormHandler = async function (event) {
  event.preventDefault();
  console.log($(this).data("api"));
  const apiKey = $(this).data("api");
  let checkedEl = $("input:checked");
  let selected = [];

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
  console.log(recipes[1].title);

  //take the object we get back and give us just the title and id. Make a new array containing an object for each of the 10 returned recipes with the key/value pairs of title and id
  const summary = recipes.map(({ title, id }) => ({ title, id }));
  console.log(summary);

  // now make your call to the back end with your data
  const results = await fetch(`/api/results`, {
    method: "POST",
    body: JSON.stringify({
      recipes,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const recipeData = await results.json();
  console.log(recipeData);
  location.replace("/api/results");
};

//when the user clicks the button, the checked values are turned into a sting, have a ",+" added to the back end, and that string is added where it says apiString. It then sends the api request out
ingredientEl.addEventListener("submit", ingFormHandler);

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
