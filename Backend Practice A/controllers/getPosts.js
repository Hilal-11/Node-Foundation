
const BlogSchema = require('../models/database_schemas_model');

const getPosts = async (req , res) => {
    try{
        const response = await BlogSchema.find({});

        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully get all posts from database"
        })

    }catch(error) {
        console.log(error.message)
        console.log("Failed to get posts from database");

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to get the posts from database"
        })
    }   
}

module.exports = getPosts;