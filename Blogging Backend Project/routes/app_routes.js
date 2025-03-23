
const express = require('express')
const router = express.Router()

const getPosts = require("../controllers/getPosts")
const createPost = require("../controllers/createPost")
const commit = require('../controllers/commit')
const like = require('../controllers/like')

router.get("/getPosts" , getPosts)
router.post('/createPost' , createPost)
router.put('/like/:id' , like)
router.put('/commit/:id' , commit)

module.exports = router