const express = require('express')
const router = express.Router();

const createTodo = require("../controllers/createTodo");
const getTodos = require("../controllers/getTodos")
const getSingleTodo = require("../controllers/getSingleTodo")
// define app router

router.post("/createTodo" , createTodo);
router.get("/getTodos" , getTodos)
router.get("getTodos/:id", getSingleTodo)


module.exports = router;