const { User } = require("../models");

const userData = [
  {
    user_name: "tracyew",
    user_password: "password",
  },
  {
    user_name: "billy",
    user_password: "bob",
  },
  {
    user_name: "monkey",
    user_password: "bars",
  },
];

const seedUser = async () => {
  const newUsers = await User.bulkCreate(userData);
  console.log({ newUsers });
  newUsers[0].addFavorite(33);
  return newUsers;
};

module.exports = seedUser;
