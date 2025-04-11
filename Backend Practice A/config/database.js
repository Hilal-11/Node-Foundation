
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URL = process.env.MONGODB_URL;

const connectDB = () => {
    mongoose.connect(MONGODB_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB connect successfully...")
    })
    .catch((error) => {
        console.log("Failed to connect the database")
        console.log(error.message);
    })
}

module.exports = connectDB;