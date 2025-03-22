const express = require("express");
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 4000
const connectDB = require('./config/database')



app.use(express.json())

app.get("/" , (req , res) => {
    res.send("<h1 style='text-align: center; font-size: 8rem;'>Backend of Blogging website for practice and fun 🎯🎯🎯</h1>")
})

app.listen(PORT , () =>{
    console.log(`App id runing on port ${PORT}`)
})

