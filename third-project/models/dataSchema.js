
const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxLength: 50
    },
    postBody: {
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
    }

})

module.exports = DataSchema