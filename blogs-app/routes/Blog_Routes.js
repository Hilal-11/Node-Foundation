
const express = require('express')
const router = express.Router();

const createBlog = require("../controllers/createBlog")
const getAllBlogs = require("../controllers/getBlogs")
const getBlog = require("../controllers/getBlog")
const updateBlog = require("../controllers/updateBlog")
const deleteBlog = require("../controllers/deleteBlog")


router.get("/getBlogs" , getAllBlogs);
router.get("/getBlog/:id" , getBlog)
router.post("/createBlog" , createBlog);
router.put("/updateBlog/:id" , updateBlog);
router.delete("/deleteBlog/:id" , deleteBlog);


module.exports = router;