
const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 50
    },
    aboutPost: {
        type: String,
        require: true,
        maxLength: 500
    },
    commits:{
        type: [],
        require: true
    },
    likes:{
        type: [],
        require: true
    },
    createdAt:{
        type: Date,
        require: true,
        default: Date.now()
    },
    updatedAt:{
        type: Date,
        require: true,
        default: Date.now()
    }
})
module.exports = DataSchema