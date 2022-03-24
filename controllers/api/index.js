const router = require("express").Router();

const userRoutes = require("./user-routes");
const resultsRoutes = require("./api/results-routes.js");

router.use("/users", userRoutes);
router.use("/results", resultsRoutes);

module.exports = router;
