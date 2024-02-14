const express = require("express");
const { Sequelize } = require("sequelize");
const { Users } = require("../models/user.model");

const userRouter = express.Router();

let insertUser = async (user) => {
  await Users.create(user);
};

userRouter.post("/adduser", async (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let website = req.body.website;
  let city = req.body.city;
  let company = req.body.company;
  await insertUser({ name, email, phone, website, city, company });
  res.send("User added in database");
});

module.exports = { userRouter };
