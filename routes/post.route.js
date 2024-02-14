const express = require("express");
const { Sequelize } = require("sequelize");
const { Posts } = require("../models/post.model");

const postRouter = express.Router();

let insertPost = async (post) => {
  await Posts.create(post);
};

postRouter.post("/userpost", async (req, res) => {
  let name = req.body.name;
  let title = req.body.title;
  let body = req.body.body;
  let company = req.body.company;
  let userId = req.body.userId;

  await insertPost({ name, title, body, company, userId });
  res.send("Post uploaded by user in database");
});

module.exports = { postRouter };
