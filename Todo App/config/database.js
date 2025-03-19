
const mongoose = require('mongoose');
require('dotenv').config();
const DATABASE_URL = process.DATABASE_URL;

function connectDB() {
    mongoose.connect(DATABASE_URL , {
        useNewUrlParcer: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("MongoDB Connected")
    }).catch((error) => {
        console.log("Connection error:", error)
    })
}

module.exports = connectDB;