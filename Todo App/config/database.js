
const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI)
function connectDB() {
    mongoose.connect(MONGO_URI , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB Connected")
    }).catch((error) => {
        console.log("Connection error:", error.message)
        process.exit(1)
    })
}

module.exports = connectDB;