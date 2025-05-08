const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const recipesRoutes = require("./routes/recipes");
const mongoose = require("mongoose");

const app = express();

const mongoURL =
  "mongodb+srv://zawthuphyo:test1234@mern-cluster.hv87ai4.mongodb.net/?retryWrites=true&w=majority&appName=Mern-Cluster";
mongoose.connect(mongoURL).then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log("app is listenintg on localhost:" + process.env.PORT);
  });
});

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "hi there!" });
});

app.use("/api/recipes", recipesRoutes);
