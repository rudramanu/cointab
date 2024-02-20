const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { userRouter } = require("./routes/user.route");
const { postRouter } = require("./routes/post.route");

app.get("/", (req, res) => {
  res.send("Basic Endpoint Working");
});

app.use("/user", userRouter);
app.use("/post", postRouter);

app.listen(9600, async () => {
  console.log("Running at port 9600");
});
