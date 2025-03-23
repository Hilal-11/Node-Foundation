
const BlogSchema = require("../models/Blog_model_schema")

const getPosts = async (req , res) => {
    try{
        const response = await BlogSchema.find({})
        res.status(200).json({
            success: true,
            data: response,
            message: "successfully fetch the posts from server"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed toi fetch posts from server")
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to fetch posts form server"
        })
    }
}

module.exports = getPosts