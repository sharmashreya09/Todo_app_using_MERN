const mongoose = require("mongoose");
const DB =
  "mongodb+srv://shreya_india:m83G9xFNaAA063os@cluster0.39ve6k4.mongodb.net/todo_mern?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection start"))
  .catch((error) => console.log(error.message));
