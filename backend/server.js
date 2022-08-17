require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const plantRoutes = require("./routes/plants")

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use('/api/plants', plantRoutes)
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT, "and connected to db");
    });
  })
  .catch((error) => {
    console.log(error);
  });

  process.env
