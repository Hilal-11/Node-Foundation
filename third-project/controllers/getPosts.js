
const Post = require('../models/PostModel')

const getPosts = async (req , res) => {
    try{    
        // const response = await Post.find({});
        const response = await Post.find({}).populate('likes').populate('comments')
        
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully fetched the posts from DB"
        })
    }catch(error){
        console.log(error.message)
        console.log("Failed  to fetch posts from DB")

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to fetch the posts from DB"
        })
    }
}


module.exports = getPosts