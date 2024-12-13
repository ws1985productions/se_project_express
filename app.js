
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const mainRouter = require("./routes/index");

const { PORT = 3001 } = process.env;
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {
    console.log("connected to DB");
  })
  .catch(console.error);

app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => {
  console.log('Link to the server');
  console.log(BASE_PATH);
});