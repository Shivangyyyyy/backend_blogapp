const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
  },
  slug: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
    min: 50,
  },
  image: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  },
  //   category: [{ type: ObjectId, ref: "Category" }],
  //   likes: [{ type: ObjectId, ref: "User" }],
  //   comment: [{ type: ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Blog", blogSchema);