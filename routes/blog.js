const { createblog } = require("../controllers/blog");
const { getallblogs } = require('../controllers/blog');
const { updateblog } = require('../controllers/blog');
const { deleteblog } = require('../controllers/blog');
const { singleblog } = require('../controllers/blog');
const router = require("express").Router();


router.post("/create-blog", createblog);

router.get('/view-all-blogs', getallblogs)

router.get('/single-blog/:id', singleblog)

router.put('/update-blog/:id', updateblog)

router.delete('/delete-blog/:id', deleteblog)

module.exports = router;