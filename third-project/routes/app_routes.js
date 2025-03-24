
const express = require('express');
const router = express.Router();

const { dummyPage } = require('../controllers/dummyPage');
const createPost = require('../controllers/createPost')
const getPosts = require('../controllers/getPosts')
const comments = require('../controllers/comments')
const like = require('../controllers/like')
const dislike = require('../controllers/dislike')

router.get('/dummyPage', dummyPage)
// router.get('/getPosts' , getPosts);
router.post('/createPost', createPost)
router.post('/comments/comment', comments)
router.post('/likes/like', like)
// router.put('/dislike/:id' , dislike)

module.exports = router