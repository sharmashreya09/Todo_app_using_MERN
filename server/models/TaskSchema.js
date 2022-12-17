const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  
});

const tasks = new mongoose.model("tasks", TaskSchema);
// here thisn" users must be same as name put in mongodb atlab collection name

module.exports = tasks;