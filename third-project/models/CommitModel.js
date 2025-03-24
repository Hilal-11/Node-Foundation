
const mongoose = require('mongoose')

const commitSchema = new mongoose.Schema({
    
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post" // refrence to post model
    },
    user: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Commit" , commitSchema)