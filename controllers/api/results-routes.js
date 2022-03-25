// GET route for results page
const axios = require("axios");
const router = require("express").Router();
// const spoonData = require("../../public/js/index.js");

router.get("/", async (req, res) => {
  // Results of user search.
  //now our data will be on req.body
  const spoonData = req.body.title; // we want just the title from the data that was returned using the api call
  console.log(spoonData);
  try {
    res.render("results", {
      spoonData,
      userID: req.session.user?.id || 0,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id")

module.exports = router;

//we want to pull out the title and image(?) from the req.body
