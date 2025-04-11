
const BlogSchema = require('../models/database_schemas_model');


const createPost = async (req , res) => {
    try{
        const { title , description } = req.body;
        const response = await BlogSchema.create({
            title,
            description,
        })

        res.status(200).json({
            success: true,
            data: response,
            message: "Succesfully created a post on Database"
        })

    }catch(error){
        console.log(error.message)
        console.log("Failed to create a post in DB")

        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to create a post in DB"
        })
    }
}

module.exports = createPost