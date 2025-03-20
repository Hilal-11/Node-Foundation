

const Blog = require('../models/Blog')

const getAllBlogs = async (req , res) => {
    try{
        const response = await Blog.find({})
        res.status(200).json({
            success: true,
            data: response,
            message: "All data is fetched successfully"
        })

    }catch(error) {
        console.error(error.message)
        console.log("Failed to get the Blogs !!! Oops")
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Failed to fetch data"

        })
    }
}

module.exports = getAllBlogs