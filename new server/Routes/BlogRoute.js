const express= require('express');
const router = express.Router();
const blog = require('../model/blog');
const doc = require('../model/Document');

router.get('/', async(req, res)=>{
    try {
        const blogs = await blog.find().select(["-docId"]);
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({status: "internal server error"});
    }
});

router.get("/:id", async(req, res)=>{
    try {
        const id = req.params.id;
        const blogId = await blog.findById(id);

        const blogs = await doc.findById(blogId["blogId"]);
        res.status(200).json(blogs);
    } catch (error) {
        console.log(error);
        res.status(500).json({status: "internal server error"});
    }
})
// const blog = await doc.findById(blogId["docId"]);

router.post("/", async(req, res)=>{
    try {
        const {author,title,id}=req.body;
        const blogs = await blog.create({author,title,docId:id});

        const saved_blog = await blog.save();
        res.status(200).json(saved_blog);
    } catch (error) {
        res.status(500).json({status: "internal server error"});
    }
})

module.exports = router;