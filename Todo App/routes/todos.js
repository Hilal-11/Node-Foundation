const express = require('express')
const router = express.Router();

const createTodo = require("../controllers/createTodo");
const getTodos = require("../controllers/getTodos")
const getSingleTodo = require("../controllers/getSingleTodo")
const updateTodo = require("../controllers/updateTodo")
const deleteTodo = require("../controllers/deleteTodo")
// define app router

router.post("/createTodo" , createTodo);
router.get("/getTodos" , getTodos)
router.get("/getTodos/:id", getSingleTodo)
router.put("/updateTodo/:id" , updateTodo)
router.delete("/deleteTodo/:id", deleteTodo)

module.exports = router;