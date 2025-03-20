
const Blog = require('../models/Blog');

const updateBlog = async (req , res) => {
    try{
        const {id} = req.params;
        const {title , aboutBlog} = req.body
        const update = await Blog.findByIdAndUpdate(
            {_id: id},
            {title , aboutBlog , updatedAt: Date.now()}
        )
        res.status(200).json({
            success: true,
            data: update,
            message: "blog successfully updated"
        })

    }catch(error) {
        console.error(error.message);
        console.log("failed to update blog")
        res.status(500).json({
            success: false,
            error: error.message,
            message: "failed to update blog"
        })
    }
}

module.exports = updateBlog