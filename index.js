const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const router = require("./routes/contactRoutes");

app.use(express.json());

app.use("/api/contact", router);
app.use("/api/volunteer", router);

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .then(() => {
    console.log("MongoDB Connected!!!!");
  })
  .catch((err) => {
    console.log(err);
  });
