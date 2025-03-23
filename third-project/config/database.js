

const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect({
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Database connection successfully done")
    }).catch((error) => {
        console.log(error.message)
        console.log("Failed to connect with database")
    })
}

module.exports = connectDB;