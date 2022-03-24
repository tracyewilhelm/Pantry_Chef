//GET the log-in page

const router = require("express").Router();
const { User } = require("../models");

//get all users
router.get("/user", async (req, res) => {
  await User.findAll();
  res.status(200).json(userData);
});

//login
// router.post("/login", async (req, res) => {
//   try {
//     const userSearch = await User.findOne({
//       where: {
//         user_name: req.body.user_name,
//       },
//     });
//     if (!userSearch) {
//       res.status(400).json({
//         message: "Incorrect user name or password. Please try again!",
//       });
//       return;
//     }

//     const validPassword = await userSearch.checkPassword(
//       req.body.user_password
//     );

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password. Please try again!" });
//       return;
//     }
//     req.session.save(() => {
//       req.session.loggedIn = true;
//       console.log(
//         "🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie",
//         req.session.cookie
//       );

//       res
//         .status(200)
//         .json({ user: dbUserData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
