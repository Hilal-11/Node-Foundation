
const Comments = require('../models/CommitModel')
const Post = require('../models/PostModel')
const comment = async (req , res) => {
    try{
        const { post , user , body } = req.body
        // create commiy
        const comments = new Comments({
            post , user , body
        });

        const saveComments = await comments.save() 
        const updatePost = await Post.findByIdAndUpdate(post , { $push:{comments: saveComments._id }}, {new: true}).populate("comments").exec()

        res.status(200).json({
            success: true,
            data: updatePost,
            message: "successfully comments"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to comments on post")

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to do comments"
        })
    }
}
module.exports = comment