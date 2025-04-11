const mongoose = require('mongoose')

const Schema = mongoose.scheme(
    {
        title: {
            type: String,
            require: true,
            maxLength: 100,
        },
        description: {
            type: String,
            require: true,
            maxLength: 500,
        },
        isLike: {
            type: Boolean,
            require: true,
            default: false,
        },
        comment:{
            type: String,
            required: true,
            maxLength: 100,
            default: "Your Comment"
            
        },
        createdAt: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now()
        }
    }
)

module.exports = mongoose.model("BlogSchems", Schema);