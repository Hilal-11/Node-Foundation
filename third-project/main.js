
const express = require('express')
require("dotenv").config();
const connectDB = require('./config/database')
const app_router = require('./routes/app_routes')
const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())


app.get("/", (req , res) => {
    res.send("<h1 style='text-align: center; font-size: 8rem;'>Backend of Blogging website for practice and fun 🎯🎯🎯</h1>")
})

app.use('/api/v1', app_router)

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`)
})

connectDB();