
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 50
    },
    body: {
        type: String,
        require: true,
        maxLength: 500
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
})
module.exports = mongoose.model("Post" , postSchema)