

const express = require("express");
const app = express();
const connectDB = require("./config/database")
require('dotenv').config();

const PORT = process.env.PORT || 4000;
app.get('/' , (req , res) => {
    res.send("<h1 style='font-size: 50px; text-align: center;' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</h1>")
})

app.listen(PORT , () => {
    console.log(`server is running on ${PORT}`)
})


connectDB();

