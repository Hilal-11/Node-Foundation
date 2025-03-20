
const Blog = require('../models/Blog')

const getBlog = async (req , res) => {
    try{
        const {id} = req.body;
        const response = await Blog.find({_id : id})
        res.status(200).json({
            success: true,
            data: response,
            message: "Successfully fetch the Blog of given is"
        })

    }catch(error) {
        console.error(error.message);
        console.log("failed to fetch blog of this id")
        res.status(404).json({
            success: false,
            error: error.message,
            message: "failed to fetch blog of given id"
        })
    }

}

module.exports = getBlog;