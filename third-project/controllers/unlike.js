const Like = require('../models/LikeModel')

const unlike = async (req , res) => {
    try{
        const { post } = req.body;
        const response = await Like.findByIdAndDelete(post)

        res.ststua(200).json({
            success: true,
            data: response,
            message: "dislike successful"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to dislike the post")
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to dislike the post"
        })
    }
}
module.exports = unlike