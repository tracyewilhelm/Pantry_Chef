//GET the log-in page
const router = require("express").Router();
const { User, Favorite } = require("../../models");

//get all users - comment this out
router.get("/", async (req, res) => {
  console.log("hello?");
  let userData = await User.findAll({});
  res.status(200).json(userData);
});

/*
//get user by id. After a user has logged in, they can click "recipes" button and see a list of their favorited recipes
router.get("/:id", async (req, res) => {
  if (req.session.loggedIn) {
    try {
      const userDB = await User.findByPk(req.params.id, {
        include: [Favorite],
      });
      const recpList = userDB.get({ plain: true });
      res.render("userpage", {
        recpList,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.render("homepage", { message: "Please log in or sign up" });
  }
});*/

//login
router.post("/login", async (req, res) => {
  try {
    console.log(
      "here lies the login page. user: " +
        req.body.user_name +
        " pw: " +
        req.body.user_password
    );
    const userSearch = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });
    if (!userSearch) {
      res.status(400).json({
        message: "Incorrect user NAME or password. Please try again!",
      });
      return;
    }

    const validPassword = await userSearch.checkPassword(
      req.body.user_password
    );

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect user name or PASSWORD. Please try again!",
      });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = userSearch;
      console.log("session saved", req.session.cookie);

      res
        .status(200)
        .json({ user: userSearch, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//adding a favorite recipe
//first they click on the save button. If they are not logged in, ask them to log in. If they are logged in 1. pull user_id from the req.session; 2. figure out what they clicked on (from the req.body). Then we need to query our Favorite table to see if that recipe already exists in it (use the recipe id to check this); If it does exit, go to next step; if it doesn't exist, add it to the Favorite table. Next step is to get user by id (from the req.session), and do an update in order to add the favorite to the through-table that it has created on its own (userfavorite?)
router.post("/addFavorite", async (req, res) => {
  console.log("this is posting to the favorite db");
  const userId = req.session.user.id; //this gives us the user id from the url that they logged in as
  const favRecpID = req.body.favRecpID; //make sure this recipeID matches where they've captured it on the front end
  //this is searching for our user by their user id
  const favRecpTitle = req.body.favRecpTitle;
  const userObj = await User.findOne({
    where: {
      id: userId,
    },
  });
  //searching the Favorite table inside of the db for a recipe id that matches what we've pulled from the front end (what the user clicked on to favorite it)
  const recipeSearch = await Favorite.findOne({
    where: {
      id: favRecpID,
    },
  });
  //if there is not a recipe currently in the Favorite table in our db then please add it by the recipeID
  if (!recipeSearch) {
    const newFav = await Favorite.create({
      id: favRecpID,
      name: favRecpTitle,
    });
    //add the newFav recipe by it's recipe ID and match it to our user (that we have found by their id) and putting it in the through table that we called userFavorite (this is your mystery table)
    userObj.addFavorite(newFav);
    res.status(200).send("recipe added");
  } else {
    userObj.addFavorite(recipeSearch);
    res.status(200).send("recipe added");
  }
});

//create new user
router.post("/", async (req, res) => {
  try {
    console.log(
      "we've landed in the user post! user: " +
        req.body.user_name +
        " pass: " +
        req.body.user_password
    );

    const dbUserData = await User.create({
      user_name: req.body.user_name,
      user_password: req.body.user_password,
    });

    req.session.save(() => {
      req.session.userId = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/favorite", async (req, res) => {
  try {
    console.log("return favorites for user");
    const theFavorites = await Favorite.findAll({
      include: [
        {
          model: User,
          where: {
            id: req.session.user?.id || 0,
          },
          required: true,
        },
      ],
    });
    // const map = theFavorites.map(User.get({ plain: true }));

    res.render("userpage", { theFavorites });
    // res.status(200).json(theFavorites);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

/*
  const spoonData = req.body.title; // we want just the title from the data that was returned using the api call
  console.log(spoonData);
  try {
    res.render("userpage", {
      spoonData,
      userID: req.session.user?.id || 0,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err); 
  }*/

//return an error or something if there's no logged in user
//make sure the front end checks for the state where there are no recipes

//ICEBOX - user wants to delete a recipe - first we pull up the data by the user id (get the userObj) that shows all of the user's favorite recipes; get the user obj and run a remove method (line 103/106)

module.exports = router;
