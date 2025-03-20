
const Blog = require('../models/Blog');

const deleteBlog = async (req , res) => {
    try{
        const {id} = req.parame;
        await Blog.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Blog delete successfully"
        })
    }catch(error) {
        console.error(error.message)
        console.log("failed to delete blog of given id")
        res.status().json({
            success: false,
            error: error.message,
            message: "failed to delete blog of given id",
        })
    }
}

module.exports = deleteBlog