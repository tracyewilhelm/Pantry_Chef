const { User } = require("../models");

const userData = [
  {
    user_name: "tracyew",
    user_password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
