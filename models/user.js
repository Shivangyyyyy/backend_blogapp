const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },
  slug: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);