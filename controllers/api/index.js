const router = require("express").Router();

const userRoutes = require("./user-routes");
const resultsRoutes = require("./results-routes.js");

router.use("/users", userRoutes);
router.use("/results", resultsRoutes);

module.exports = router;
