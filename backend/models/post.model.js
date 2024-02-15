const { DataTypes } = require("sequelize");

const sequelize = require("../configs/db");

const Posts = sequelize.define(
  "Posts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

try {
  Posts.sync();
  console.log("Posts table created successfully");
} catch (error) {
  console.log("Failed while creating posts table");
}

module.exports = Posts;
