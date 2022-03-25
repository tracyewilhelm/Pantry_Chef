// GET route for results page
const axios = require("axios");
const router = require("express").Router();
// const spoonData = require("../../public/js/index.js");

router.get("/", async (req, res) => {
  // Results of user search.
  //now our data will be on req.body
  const spoonData = req.body;
  console.log(spoonData);
  try {
    res.render("results", { spoonData });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
