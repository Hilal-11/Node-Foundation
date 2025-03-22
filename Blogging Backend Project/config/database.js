

const mongoose = require('mongoose')
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URL

function connectDB () {
    mongoose.connect(DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully establish DB connection")
    })
    .catch((error) => {
        console.log(error.message)
        console.log("Failed to establish DB connection")
    })
}

module.exports = connectDB