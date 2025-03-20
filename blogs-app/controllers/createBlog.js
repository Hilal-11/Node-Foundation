

const Blog = require('../models/Blog')

const createBlog = async (req , res) => {
    try{
        const { title , aboutBlog } = req.body;
        const response = await Blog.create({title , aboutBlog})
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully create a Blog"
        })
    }catch(error) {
        console.error(error.message)
        console.log("Falied to creaet a blog Internel error !!! Oops")
        res.status(500).json({
            success: false,
            error: error.message,
            message: "internal server error , failed to create post"
        })
    }
}

module.exports = createBlog