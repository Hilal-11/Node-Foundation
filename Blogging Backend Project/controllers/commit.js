
const BlogSchema = require('../models/Blog_model_schema')

const commit = async (req , res) => {
    try{
        const {id} = req.parems;
        const {commit} = req.body;
        BlogSchema.findOneAndUpdate(
            { _id: id },
            { commit , updateAt: Date.now()}
        )
        res.status(200).json({
            success: true,
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

module.exports = commit