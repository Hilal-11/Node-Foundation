const mongoose = require('mongoose')
const express = require('express')
const router = express.Router();

const createBlog = require("../controllers/createBlog")
const getBlogs = require("../controllers/getBlog")
const updateBlog = require("../controllers/updateBlog")
const deleteBlog = require("../controllers/deleteBlog")


router.get("/createBlog" , createBlog);
router.post("/getBlogs" , getBlogs);
router.put("/updateBlog" , updateBlog);
router.delete("/deleteBlog" , deleteBlog);


module.exports = router;