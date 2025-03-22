const mongoose = require('mongoose')

const BlogData = mongoose.Schema(
        {
            title: {
                type: String,
                require: true,
                maxLength: 50
            },
            description: {
                type: String,
                require: true,
                maxLength: 500
            },
            commit: {
                type: String,
                maxLength: 200,
                required: true,
                default: "your commit here"
            },
            like: {
                type: Boolean,
                require: true,
                default: false
            },
            createdAt:{
                type: Date,
                require: true,
                default: Date.now()
            },
            updatedAt: {    
                type: Date,
                require: true,
                default: Date.now()
            }

        }
    )

module.exports = mongoose.model("BlogSchema" , BlogData)