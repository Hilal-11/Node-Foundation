
const Todo = require("../models/todo")

const getTodos = async (req , res) => {
    try{
        const response = await Todo.find({})
        res.status(200).json({
            success: true,
            data: response,
            message: "All data is fetched successfully"
        })

        
    }catch(error) {
        console.error(error.message)
        console.log("Data not fpouns !!!");
        res.status(404).json({
            success: false,
            error: "internal error Not found the data",
            message: "Not Found"
        })
    }
}

module.exports = getTodos;