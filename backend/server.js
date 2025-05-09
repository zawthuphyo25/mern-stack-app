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
  console.log("MongoDB connected");
  app.listen(process.env.PORT, () => {
    console.log("app is listenintg on localhost:" + process.env.PORT);
  });
});

app.use(cors()); //local development --WARNING---
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ msg: "hi there!" });
});

app.use("/api/recipes", recipesRoutes);
