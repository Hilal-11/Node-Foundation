
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
    commits:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Commit'
    }],
    likes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Like'
    }],
})
module.exports = mongoose.model("Post" , postSchema)