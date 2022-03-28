const router = require("express").Router();
require("dotenv").config();
const { User, Favorite } = require("../models");

// GET homepage
// http://localhost:3001/
router.get("/", (req, res) => {
  console.log(process.env.API_KEY);
  try {
    res.status(200).render("homepage", { API_KEY: process.env.API_KEY });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET list of favorite
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
    const justTheFacts = theFavorites.map((favorite) =>
      favorite.get({ plain: true })
    );

    res.render("userpage", { justTheFacts });
    // res.status(200).json(theFavorites);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

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
