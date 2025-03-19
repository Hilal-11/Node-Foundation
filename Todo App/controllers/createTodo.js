
const Todo = require("../models/todo")


// define route handler

const createTodo = async(req , res) => {
    try {
        const { title , description } = req.body;
        const response = await Todo.create({title , description})
        //send a json res with success flag
        res.status(200).json(
            {
                success: true,
                data: response,
                message: "Entry created successfully"
            }
        )
    }catch(error){
        console.error(error.message);
        res.status(500).json(
            {
                success: false,
                data: "Internal error",
                message: error.message
            }
        )

    }
}

module.exports = createTodo;