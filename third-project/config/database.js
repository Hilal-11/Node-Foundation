

const mongoose = require('mongoose')
require('dotenv').config()
const DATABASE_URL = process.env.DATABASE_URL
const connectDB = () => {
    mongoose.connect(DATABASE_URL ,{
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