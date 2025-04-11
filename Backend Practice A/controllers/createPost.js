
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

    }
}