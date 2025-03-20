
const Blog = require('../models/Blog');

const deleteBlog = async (req , res) => {
    try{
        const {id} = req.params;
        await Blog.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Blog delete successfully"
        })
    }catch(error) {
        console.error(error.message)
        console.log("failed to delete blog of given id")
        res.status(500).json({
            success: false,
            error: error.message,
            message: "failed to delete blog of given id",
        })
    }
}

module.exports = deleteBlog