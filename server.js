const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const parser = require("ingredientparserjs");
const routes = require("./controllers");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "SuperSecret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sess));
// Incorporate the custom helper methods
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
