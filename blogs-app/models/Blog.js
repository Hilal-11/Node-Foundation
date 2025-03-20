const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength : 50,

    },
    aboutBlog: {
        type: String,
        required: true,
        maxLength: 500
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),

    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now(),
    }
})

module.exports = mongoose.model("Blog" , BlogSchema)