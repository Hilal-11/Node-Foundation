
const express = require('express');
const router = express.Router();

const getPosts = require('../controllers/getPosts')
const createPost = require('../controllers/createPost')
const like = require('../controllers/like')
const dislike = require('../controllers/dislike')
const comment = require('../controllers/comment')

router.get("/getposts" , getPosts);
router.post("/createPost" , createPost);
router.put("/like" , like);
router.put("/dislike" , dislike);
router.delete("/comment" , comment);


module.exports = router