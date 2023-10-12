const mongoose = require("mongoose");

const taskschema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
  },
});
const model = mongoose.model("Task", taskschema);

module.exports = model;
