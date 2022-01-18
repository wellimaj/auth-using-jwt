const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test");
const City = require("./city");
app.use(express.json());

app.post("/login", (req, res) => {
  const token = jwt.sign(req.body.userID, "jwttoken");
  res.json({
    status: "Token generated successfully",
    token: token,
  });
});
app.get("/", async (req, res) => {
  data = await City.find();
  console.log(data);
  res.send(data);
});
app.listen(3001, () => {
  console.log("Server is listening");
});
