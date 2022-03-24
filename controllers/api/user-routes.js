//GET the log-in page

const router = require("express").Router();
const { User } = require("../../models");

//get all users
router.get("/", async (req, res) => {
  console.log("hello?");
  let userData = await User.findAll({});
  res.status(200).json(userData);
});

//get user by id
router.get("/:id", async (req, res) => {
  try {
    const userDB = await User.findByPk(req.params.id, {
      include: [{ model: Favorites, attributes: id }],
    });
    const recpList = userDB.get({ plain: true });
    res.render("favorites", {
      recpList,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const userSearch = await User.findOne({
      where: {
        user_name: req.body.user_name,
      },
    });
    if (!userSearch) {
      res.status(400).json({
        message: "Incorrect user name or password. Please try again!",
      });
      return;
    }

    const validPassword = await userSearch.checkPassword(
      req.body.user_password
    );

    if (!validPassword) {
      res.status(400).json({
        message: "Incorrect user name or password. Please try again!",
      });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      console.log("session saved", req.session.cookie);

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
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

module.exports = router;
