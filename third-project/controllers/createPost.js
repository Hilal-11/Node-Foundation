const Post = require('../models/PostModel')

const createPost = async (req , res) => {
    try{
        const { title , body } = req.body
        const response = await Post.create({title , body})

        res.status(200).json({
            success: true,
            data: response,
            message: "Post is created successfully"
        })
    }catch(error) {
        console.log(error.message)
        console.log(error)

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to create post"
        })
    }
}

module.exports = createPost