
const BlogSchema = require('../models/database_schemas_model');

const like = async (req , res) => {
    try{
        const { id , islike } = req.params();
        const response = await BlogSchema.findByIdAndUpdate(
            {_id: id},
            { islike , updatedAt: Date.now()}
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