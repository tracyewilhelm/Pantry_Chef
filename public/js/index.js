//define a variable that then
const ingredientEl = document.querySelector("#ingredient-form");
console.log(ingredientEl);
//in this file you make the api all to spoonacula, once you have that data from your user input you then make your fetch post to you controller route. Once you have that string
//you then send your data to your fetch

const ingFormHandler = async function (event) {
  event.preventDefault();
  console.log($(this).data("api"));
  const apiKey = $(this).data("api");
  let checkedEl = $("input:checked");
  let selected = [];

  $.each(checkedEl, function () {
    selected.push($(this).val());
  });

  const apiString = selected.join(",+");
  console.log(apiString);

  //now that we have our string, make our call to the spoonacular api here and use await
  const spoonData = await fetch(
    // `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=apples,+sugar,+cinnamon&ranking=1`

    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${apiString}&ranking=1&includeInstructions=true`
  );

  const recipes = await spoonData.json();
  console.log("recipes line 29");
  console.log(recipes);

  console.log(recipes[1].title);

  const summary = recipes.map(({ title, id }) => ({ title, id }));
  console.log(summary);

  //now make your call to the back end with your data
  const results = await fetch(`/api/results`, {
    method: "POST",
    body: JSON.stringify({
      spoonData,
    }),
    headers: { "Content-Type": "application/json" },
  });
<<<<<<< HEAD
  const recipeData = await results.json()
   console.log(recipeData)

   // recipeData is an array of 10 objects
   
//    location.replace("/api/results");
=======

  const recipeData = await results.json();
  console.log(recipeData);

  //recipeData is an array of 10 objects

  //    location.replace("/api/results");
>>>>>>> main
};

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
