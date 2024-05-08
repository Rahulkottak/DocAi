import express, { response } from "express";
import Blog from "../Blog.js";
import Document from "../Document.js"
const { Router } = express;
const blogRouter = Router();

blogRouter.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().select(["-docId"]);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ status: "internal server error" });
  }
});

blogRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const blogId = await Blog.findById(id)

    const blog = await Document.findById(blogId["docId"])
    res.status(200).json(blog);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "internal server error" });
  }
});


blogRouter.post("/", async (req, res) => {
  try {
    const { author, title, id } = req.body;
    const blog = new Blog({ author, title,docId:id });

    const saved_blog = await blog.save();
    res.status(200).json(saved_blog);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "internal server error" });
  }
});

export default blogRouter