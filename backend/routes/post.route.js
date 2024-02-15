const express = require("express");
const excel = require("exceljs");
const { Sequelize } = require("sequelize");
const Posts = require("../models/post.model");

const postRouter = express.Router();

let insertPost = async (post) => {
  await Posts.bulkCreate(post);
};

postRouter.post("/userpost", async (req, res) => {
  let posts = req.body;
  await insertPost(posts);
  res.send("Post uploaded by user in database");
});

const fetchUserPosts = async (userId) => {
  const userPosts = await Posts.findAll({
    where: {
      userId: userId,
    },
  });
  return userPosts;
};

// Route to download user posts in Excel format
postRouter.get("/userposts/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const userPosts = await fetchUserPosts(userId);

    const workbook = new excel.Workbook();
    const worksheet = workbook.addWorksheet("Posts");

    // Define headers
    worksheet.columns = [
      { header: "Name", key: "name", width: 20 },
      { header: "Title", key: "title", width: 30 },
      { header: "Body", key: "body", width: 50 },
      { header: "Company", key: "company", width: 20 },
    ];

    // Add rows with post data
    userPosts.forEach((post) => {
      worksheet.addRow({
        name: post.name,
        title: post.title,
        body: post.body,
        company: post.company,
      });
    });

    // Set response headers for Excel file download
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", "attachment; filename=posts.xlsx");

    // Write Excel data to response stream
    await workbook.xlsx.write(res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = { postRouter };
