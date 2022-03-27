//when the user clicks the My Favorites button (event listener on a function), populate the userpage.handlebar (GET route using /api/users/:id), which will show them a list of all their saved recipes (this is rendered in the user-routes).

//we need to connect to the my favorites "button". This is a li in the nav bar on the main handlebar with an id of myFavorites
const myFavoriteEl = document.querySelector("#myFavorites");

//this is the function that will make the call to the db to show the list of user favorited recipes
const showFavorites = async function (event) {
  event.preventDefault();
  if (something) {
    const response = await fetch("/api/users/:id", {
      method: "POST",
      body: JSON.stringify({
        something,
      }),
      headers: { "Content-Type": "application/json" },
    });
  }
};
//this is the even listener that will call the showFavorites function
myFavoriteEl.addEventListener("click", showFavorites);
