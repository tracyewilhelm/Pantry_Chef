//when the user clicks the MyRecipes button, it will redirect them to their user page, which which will render a list of their favorited recipe names. When they click on the recipe names, the recipe will show up.

const response = await fetch("/api/user/:id", {
  method: "GET",
  body: JSON.stringify({}),
});

const userPageEl = document.querySelector("#favoriteRecipes");
userPageEl.addEventListener("click", toUserPage);
