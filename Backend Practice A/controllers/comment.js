
const BlogSchema = require('../models/database_schemas_model');

const comment = async (req , res) => {
    try{
        const {id} = req.params;
        const { comment } = req.body;
        const postCommit = await BlogSchema.findByIdAndUpdate(
            { _id: id },
            { comment , updatedAt: Date.now()}
        )
        res.status(200).json({
            success: true,
            data: postCommit,
            message: "Successfully send a commit"
        })
    }catch(error) {
        console.log(error.message)
        console.log("Failed to send a commit")
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to send a commit"
        })
    }   
}

module.exports = comment