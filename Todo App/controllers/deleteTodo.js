const Todo = require("../models/todo");


const deleteTodo = async (req , res) => {
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "todo deleted"
        })
       
    }catch(error) {
        console.log(error.message);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "server internal error" 
        })
    }
}

module.exports = deleteTodo;