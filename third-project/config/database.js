

const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URI = process.env.MONGO_URI
const connectDB = () => {
    mongoose.connect(MONGO_URI ,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database connection successfully done")
    }).catch((error) => {
        console.log(error.message)
        console.log("Failed to connect with database")
        process.exit(1)
    })
}

module.exports = connectDB;