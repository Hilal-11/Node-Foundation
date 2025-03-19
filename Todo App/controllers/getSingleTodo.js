
const Todo = require("../models/todo")

const getSingleTodo = async (req , res) => {
    try{
        const id = req.params.id;
        const response = await Todo.find({_id: id})
        if(!response) {
            return res.status(404).json({
                success: false,
                data: response,
                message: "Data not found.."
            })
        }
        res.status(200).json({
            success: true,
            data: response,
            message: "Data is fetched of given id successfully..."
        })
    }catch(error) {
        console.error(error.message);
        console.log("internal error , data not found of the given id")
        res.status(404).json({
            success: false,
            error: "data not found 404",
            message: "Not found"
        })
    }
}

module.exports = getSingleTodo;