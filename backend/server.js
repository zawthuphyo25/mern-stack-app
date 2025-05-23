const express = require("express");
require("dotenv").config();
const morgan = require("morgan");
const recipesRoutes = require("./routes/recipes");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const mongoURL =
  "mongodb+srv://zawthuphyo:test1234@mern-cluster.lrfrcs1.mongodb.net/?retryWrites=true&w=majority&appName=Mern-Cluster";
mongoose.connect(mongoURL).then(() => {
  console.log("connected to db");
  app.listen(process.env.PORT, () => {
    console.log("app is running on localhost:" + process.env.PORT);
  });
});
app.use(cors()); //local development --WARNING---
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.use("/api/recipes", recipesRoutes);
