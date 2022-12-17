require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors")
const mongoose=require("mongoose");
require("./db/conn");
const tasks = require("./models/TaskSchema");
const router=require("./routes/router");

app.use(cors());
app.use(express.json());
app.use(router);

const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
