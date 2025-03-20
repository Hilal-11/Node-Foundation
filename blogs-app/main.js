

const express = require("express");
const app = express();
const connectDB = require("./config/database")
const BlogRoutes = require('./routes/Blog_Routes')
require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use("/api/v1" , BlogRoutes)

app.get('/' , (req , res) => {
    res.send("<h1 style='font-size: 50px; text-align: center;' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</h1>")
})

app.listen(PORT , () => {
    console.log(`server is running on ${PORT}`)
})


connectDB();

