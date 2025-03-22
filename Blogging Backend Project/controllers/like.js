
const BlogSchema = require('../models/Blog_model_schema')

const like = async (req , res) => {
    try{
        const {id} = req.params;
        const {like} = req.body;

        const response = await BlogSchema.findByIdAndUpdate(
            { id , like , updateAt: Date.now()}
        )
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully likes the post",
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to likes the post")
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to like the post"
        })
    }
}

module.exports = like