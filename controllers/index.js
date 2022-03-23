const router = require("express").Router();

const homeRoutes = require("./home-routes.js");
const resultsRoutes = require("./results-routes.js");

router.use("/", homeRoutes);
router.use("/results", resultsRoutes);

module.exports = router;