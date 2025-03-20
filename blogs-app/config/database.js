
const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URL = process.env.MONGO_URL

function connectDB() {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true  
      }).then(() => {
          console.log("MongoDB Connection Successfully...")
      }).catch((error) => {
          console.log(error.message)
          console.log("MongoDB Connection failed")
      })
}

module.exports = connectDB