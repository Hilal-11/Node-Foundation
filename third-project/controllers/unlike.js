const Like = require('../models/LikeModel');
const Post = require('../models/PostModel')


const unlike = async (req , res) => {
    try{
        const { post , like } = req.body;
        const deleteLike = await Like.findOneAndDelete({post: post , _id: like})
        // const deleteLike = await Like.findByIdAndDelete({_id: like})

        // update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post ,
                                             {$pull: {likes: deleteLike._id}},
                                             {new: true})

        res.status(200).json({
            success: true,
            data: updatedPost,
            message: "dislike successful"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to dislike the post")
        res.status(500).json({
            success: false,
            error: error.message,
            message: `Failed to dislike the post`
        })
    }
}
module.exports = unlike