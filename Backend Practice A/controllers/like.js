
const BlogSchema = require('../models/database_schemas_model');

const like = async (req , res) => {
    try{
        const { id } = req.params();
        const { isLike } = req.body;
        const response = await BlogSchema.findByIdAndUpdate(
            {_id: id},
            { isLike , updatedAt: Date.now()}
        )
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully likes the post"
        })
    }catch(error) {
        console.log(error.message);
        console.log("Failed to like the post")

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to like the post"
        })
    }
}

module.exports = like;