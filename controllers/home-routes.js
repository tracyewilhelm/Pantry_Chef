const router = require("express").Router();
require("dotenv").config();

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

module.exports = router;
