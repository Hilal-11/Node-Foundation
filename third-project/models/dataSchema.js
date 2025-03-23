
const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
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
        type: [],
        ref: 'Commit'
    }],
    likes:[{
        type: [],
        ref: 'Like'
    }],
})
module.exports = DataSchema