
const express = require('express')
const router = express.Router();

const createPost = require('../controllers/createPost')
const getPosts = require('../controllers/getPosts')
const commit = require('../controllers/commit')
const like = require('../controllers/like')
const dislike = require('../controllers/dislike')


