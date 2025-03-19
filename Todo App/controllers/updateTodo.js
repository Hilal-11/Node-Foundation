const Todo = require("../models/todo");


const updateTodo = async (req , res) => {
    try{
        const { id } = req.params
        const {title , description} = req.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description , updateAt: Date.now()}
        )
        res.status(200).json({
            success: true,
            data: todo,
            message: "update successfully"
        })
    }catch(error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "erver internal error" 
        })
    }
}

module.exports = updateTodo;