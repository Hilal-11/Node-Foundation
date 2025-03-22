
const BlogSchema = require('../models/Blog_model_schema')

const createPost = async (req , res) => {
    try{
        const { title , description } = req.body;
        const response = await BlogSchema.create({title , description})

        res.status(200).json({
            success: true,
            data: response,
            message: "successfully create a post"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to create a post ! Oops")
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to create a post Oops"
        })
    }
}

module.exports = createPost 