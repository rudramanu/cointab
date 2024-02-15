const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("user", "root", process.env.password, {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Database Connected Successfully");
} catch (error) {
  console.log("Something went wrong while connecting with database");
}

module.exports = sequelize;
