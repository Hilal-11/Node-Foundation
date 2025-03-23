
const BlogSchema = require("../models/Blog_model_schema")

const dislike = async (req , res) => {
    try{
        const {id} = req.params;
        const { islike } = req.body;
        const response = await BlogSchema.findByIdAndUpdate(
            {_id: id},
            { islike , updateAt: Date.now()}
        )
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully dislikes the post"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to dislike the post")
        res.status(404).json({
            success: false,
            error: error.message,
            message: "Failed to dislike the post"
        })
    }
}

module.exports = dislike