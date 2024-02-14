const express = require("express");
const app = express();
app.use(express.json());

const { userRouter } = require("./routes/user.route");

app.get("/", (req, res) => {
  res.send("Basic Endpoint Working");
});

app.use("/user", userRouter);

app.listen(9600, async () => {
  console.log("Running at port 9600");
});
