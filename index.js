const mongoose = require("mongoose");
const express = require("express");

const app = express();

const mongooseConnect = async () => {
  await mongoose.connect("mongo://127.0.0.1:27017", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("connected to the database");
};

mongooseConnect();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
