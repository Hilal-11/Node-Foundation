
const express = require('express');
const router = express.Router();

const { dummyPage } = require('../controllers/dummyPage');
const createPost = require('../controllers/createPost')
const getPosts = require('../controllers/getPosts')
const commit = require('../controllers/commit')
const like = require('../controllers/like')
const dislike = require('../controllers/dislike')

router.get('/dummyPage', dummyPage)
// router.get('/getPosts' , getPosts);
// router.post('/createPost', createPost)
// router.put('/commit/:id', commit)
// router.put('/like/:id', like)
// router.put('/dislike/:id' , dislike)

module.exports = router