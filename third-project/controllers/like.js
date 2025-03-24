const Like = require('../models/LikeModel')
const Post = require('../models/PostModel')
const like = async (req , res) => {
    try{
        const { post , user } = req.body
        const createLike = new Like({
            post , user
        })
        const saveLike = await createLike.save()
        const updatePost = await Post.findByIdAndUpdate(post , { $push:{likes: saveLike._id }}, {new: true}).populate("likes").exec();

        res.status(200).json({
            success: true,
            data: updatePost,
            message: "Successfully likes the post"
        })

    }catch(error){
        console.log(error.message)
        console.log()
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to lijes the post"
        })
    }
}
module.exports = like