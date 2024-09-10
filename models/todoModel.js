const { default: mongoose } = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: String,
});
module.exports = mongoose.model("Todo", todoSchema);
