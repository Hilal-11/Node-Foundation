
const Commit = require('../models/CommitModel')
const Post = require('../models/PostModel')
const commit = async (req , res) => {
    try{
        const { post , user , body } = req.body
        // create commiy
        const commit = new Commit({
            post , user , body
        });

        const saveCommit = await commit.save() 
        const updatePost = await Post.findByIdAndUpdate(post , { $push: {commit: saveCommit._id } }, {new: true}).populate("commits").exec()

        res.status(200).json({
            success: true,
            data: updatePost,
            message: "successfully commit"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to commit on post")

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to do commit"
        })
    }
}
module.exports = commit