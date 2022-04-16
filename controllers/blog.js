const Blog = require("../models/blog");

module.exports.createblog = async (req, res) => {
  try {
    const { title, slug, image, body } = req.body;
    // console.log(req.body);
    const newblog = await new Blog({
      title,
      slug,
      image,
      body,
    }).save();
    res.json(newblog);
  } catch (err) {
    console.log(err);
  }
};

// getallblogs
module.exports.getallblogs = async(req, res) => {
  try{
      const {title,slug,image,body} = req.body;
      const blogs = await Blog.find({});

      res.json({blogs});
  }catch (err){
      console.log(err)
  }
}

// getSingleBlog
module.exports.singleblog = async(req, res) => {

  try{      const {title,slug,image,body} = req.body;
      const blog = await Blog.findById(req.params.id);

      res.json(blog);
  }catch (err){
      console.log(err)
  }
}

// updateBlog
module.exports.updateblog = async(req, res) => {
  try{
      const {title,slug,image,body} = req.body;
      const updateblog = await Blog.findByIdAndUpdate(req.params.id ,{
          title,
          slug,
          image,
          body,
      });

      res.json(updateblog);
  }catch (err){
      console.log(err)
  }
}

// deleteBlog
module.exports.deleteblog = async(req, res) => {
  try{
      const {title,slug,image,body} = req.body;
      const removeblog = await Blog.findByIdAndRemove(req.params.id);

      res.json(removeblog);
  }catch (err){
      console.log(err)
  }
}