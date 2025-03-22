
const express = require("express");
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 4000
const connectDB = require('./config/database')
const app_routes = require('./routes/app_routes')


app.use(express.json())

app.get("/" , (req , res) => {
    res.send("<h1 style='text-align: center; font-size: 8rem;'>Backend of Blogging website for practice and fun 🎯🎯🎯</h1>")
})

app.use("/blogging", app_routes)

app.listen(PORT , () =>{
    console.log(`App id runing on port ${PORT}`)
})
connectDB()  