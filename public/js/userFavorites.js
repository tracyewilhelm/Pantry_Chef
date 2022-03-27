//when the user clicks the MyRecipes button, it will redirect them to their user page, which which will render a list of their favorited recipe names. When they click on the recipe names, the recipe will show up.
$(userPageEl).on("click", function () {
  window.location = "";
});

const userPageEl = document.querySelector("#favoriteRecipes");
userPageEl.addEventListener("click", toUserPage);


//  Create a post route from an event listener to grab the recipe selected as a favorite to add
// that recipe into the database, then append it to the dom to be displayed in that user's table. 