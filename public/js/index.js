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
    `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=apples,+sugar,+cinnamon&ranking=1`

    // `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_TOKEN}&ingredients=${apiString}&ranking=1&includeInstructions=true`
  );

  //now make your call to the back end with your data
  await fetch(`/api/results`, {
    method: "POST",
    body: JSON.stringify({
      spoonData,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // console.log(selected)
  location.replace("/api/results");
};

ingredientEl.addEventListener("submit", ingFormHandler);
