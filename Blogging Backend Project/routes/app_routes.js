
const express = require('express')
const router = express.Router()

const getPosts = require("../controllers/getPosts")
const createPost = require("../controllers/createPost")
const commit = require('../controllers/commit')
const like = require('../controllers/like')
const dislike = require("../controllers/dislike")

router.get("/getPosts" , getPosts)
router.post('/createPost' , createPost)
router.put('/like/:id' , like)
router.put('/dislike/:id', dislike)
router.put('/commit/:id' , commit)

module.exports = router