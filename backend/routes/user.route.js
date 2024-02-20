const express = require("express");
const { Sequelize } = require("sequelize");
const Users = require("../models/user.model");

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
  let userId = req.body.userId;

  console.log(name, email, phone, website, city, company, userId);
  await insertUser({ name, email, phone, website, city, company, userId });
  res.send({ message: "User added in database" });
});

userRouter.get("/", async (req, res) => {
  try {
    let users = await Users.findAll();
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    let users = await Users.findOne({ where: { userId } });
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

module.exports = { userRouter };
